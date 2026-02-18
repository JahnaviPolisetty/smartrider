const express = require("express");
const router = express.Router();
const supabase = require("../supabaseClient");

//
// 🚀 POST: Request a ride
//
router.post("/", async (req, res) => {
  try {
    const { pickup_location, airport, seats_required, luggage_count, user_id } = req.body;

    if (!pickup_location || !airport || !seats_required || !user_id) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // 1️⃣ Save ride request
    const { data: requestData, error: requestError } = await supabase
      .from("ride_requests")
      .insert([{ pickup_location, airport, seats_required, luggage_count, user_id }])
      .select()
      .single();

    if (requestError) {
      console.error(requestError);
      return res.status(500).json({ error: "Failed to save request" });
    }

    // 2️⃣ Find existing ride with available seats
    const { data: rides, error: rideError } = await supabase
      .from("rides")
      .select(`
        *,
        ride_passengers(*)
      `)
      .eq("airport", airport)
      .eq("status", "active");

    if (rideError) {
      console.error(rideError);
      return res.status(500).json({ error: "Ride lookup failed" });
    }

    let rideId = null;

    if (rides && rides.length > 0) {
      for (let ride of rides) {
        const occupiedSeats = ride.ride_passengers.length;

        if (occupiedSeats + seats_required <= ride.total_seats) {
          rideId = ride.id;
          break;
        }
      }
    }

    // 3️⃣ Create new ride if none available
    if (!rideId) {
      const { data: newRide, error: newRideError } = await supabase
        .from("rides")
        .insert([{ airport, total_seats: 4 }]) // default 4 seats
        .select()
        .single();

      if (newRideError) {
        console.error(newRideError);
        return res.status(500).json({ error: "Failed to create ride" });
      }

      rideId = newRide.id;
    }

    // 4️⃣ Add passenger to ride
    const { error: passengerError } = await supabase
      .from("ride_passengers")
      .insert([{ ride_id: rideId, user_id }]);

    if (passengerError) {
      console.error(passengerError);
      return res.status(500).json({ error: "Failed to add passenger" });
    }

    res.json({
      success: true,
      message: "Ride matched successfully",
      ride_id: rideId,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

//
// 🚀 GET: View rides with passengers
//
router.get("/", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("rides")
      .select(`
        *,
        ride_passengers(*)
      `);

    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Fetch failed" });
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
