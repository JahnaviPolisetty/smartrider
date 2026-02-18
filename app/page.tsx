"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// 🔎 mock autocomplete data
const locations = ["Hyderabad", "Madhapur", "Gachibowli", "Kondapur"];
const airports = ["Rajiv Gandhi International Airport", "Shamshabad Airport"];

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [darkMode, setDarkMode] = useState(true);

  const [pickup, setPickup] = useState("");
  const [airport, setAirport] = useState("");

  const [pickupSuggestions, setPickupSuggestions] = useState<string[]>([]);
  const [airportSuggestions, setAirportSuggestions] = useState<string[]>([]);

  const [seats, setSeats] = useState(1);
  const [luggage, setLuggage] = useState(0);

  const [loading, setLoading] = useState(false);
  const [ride, setRide] = useState<any>(null);

  // 🔐 get user
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
  }, []);

  const login = async () => {
    await supabase.auth.signInWithOAuth({ provider: "google" });
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  // 🔎 Autocomplete
  const handlePickupChange = (value: string) => {
    setPickup(value);
    setPickupSuggestions(
      locations.filter((l) =>
        l.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleAirportChange = (value: string) => {
    setAirport(value);
    setAirportSuggestions(
      airports.filter((a) =>
        a.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  // 🚕 Find Ride
  const findRide = async () => {
    setLoading(true);
    setRide(null);

    setTimeout(() => {
      setRide({
        cabNumber: "TS09 AB 1234",
        passengers: Math.floor(Math.random() * 3) + 1,
        seatsLeft: 4 - seats,
        eta: Math.floor(Math.random() * 10) + 5,
        price: 250 + Math.floor(Math.random() * 150),
      });
      setLoading(false);
    }, 2000);
  };

  const name =
    user?.user_metadata?.full_name ||
    user?.email?.split("@")[0] ||
    "User";

  const bg = darkMode
    ? "linear-gradient(135deg,#0f172a,#1e293b)"
    : "linear-gradient(135deg,#e0f2fe,#f8fafc)";

  const cardBg = darkMode ? "#111827" : "#ffffff";
  const textColor = darkMode ? "white" : "#111";

  if (!user) {
    return (
      <div style={{ ...container, background: bg }}>
        <div style={{ ...card, background: cardBg, color: textColor }}>
          <h2>🚕 Airport Ride Pool</h2>
          <button style={button} onClick={login}>
            Login with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ ...container, background: bg }}>
      <div style={{ ...card, background: cardBg, color: textColor }}>
        <h2>🚕 Airport Ride Pool</h2>
        <p>Welcome, <b>{name}</b> 👋</p>

        {/* 🌗 Dark mode toggle */}
        <button
          style={{ ...button, background: "#6366f1" }}
          onClick={() => setDarkMode(!darkMode)}
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>

        {/* Pickup */}
        <input
          style={input}
          placeholder="Pickup Location"
          value={pickup}
          onChange={(e) => handlePickupChange(e.target.value)}
        />
        {pickupSuggestions.map((s) => (
          <div key={s} style={suggestion} onClick={() => setPickup(s)}>
            {s}
          </div>
        ))}

        {/* Airport */}
        <input
          style={input}
          placeholder="Airport"
          value={airport}
          onChange={(e) => handleAirportChange(e.target.value)}
        />
        {airportSuggestions.map((s) => (
          <div key={s} style={suggestion} onClick={() => setAirport(s)}>
            {s}
          </div>
        ))}

        {/* Seats */}
        <label>Seats Required</label>
        <input
          type="number"
          style={input}
          value={seats}
          min={1}
          max={4}
          onChange={(e) => setSeats(Number(e.target.value))}
        />

        {/* Luggage */}
        <label>Luggage Count</label>
        <input
          type="number"
          style={input}
          value={luggage}
          onChange={(e) => setLuggage(Number(e.target.value))}
        />

        <button style={button} onClick={findRide}>
          Find Ride 🚀
        </button>

        {loading && <p>🔍 Searching for rides...</p>}

        {ride && (
          <div style={result}>
            <h3>🚕 Ride Found!</h3>
            <p><b>Cab:</b> {ride.cabNumber}</p>
            <p><b>Passengers:</b> {ride.passengers}</p>
            <p><b>Seats Left:</b> {ride.seatsLeft}</p>
            <p><b>ETA:</b> {ride.eta} mins</p>
            <p><b>Estimated Price:</b> ₹{ride.price}</p>

            <button style={button}>Proceed to Payment 💳</button>
          </div>
        )}

        <button style={{ ...button, background: "#ef4444" }} onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

// 🎨 styles
const container = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const card = {
  padding: "30px",
  borderRadius: "16px",
  width: "350px",
  textAlign: "center" as const,
};

const input = {
  width: "100%",
  padding: "10px",
  margin: "8px 0",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const button = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  borderRadius: "8px",
  border: "none",
  background: "#10b981",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
};

const suggestion = {
  background: "#e5e7eb",
  padding: "5px",
  marginBottom: "4px",
  cursor: "pointer",
  borderRadius: "4px",
};

const result = {
  marginTop: "15px",
  padding: "10px",
  background: "#1f2937",
  color: "white",
  borderRadius: "10px",
};
