require("dotenv").config();
const express = require("express");
const cors = require("cors");

const ridesRoutes = require("./routes/rides");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect routes
app.use("/api/rides", ridesRoutes);

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Airport Ride Pool API running 🚕");
});

// ✅ Use .env port OR fallback
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
