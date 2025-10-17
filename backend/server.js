import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import songRoutes from "./routes/songRoutes.js";
import statsRoutes from "./routes/statsRoutes.js";

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/songs", songRoutes);
app.use("/api/stats", statsRoutes);

app.get("/test", (req, res) => {
  res.send("API is running...lol");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`API listening on: ${PORT}`);
});