import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
// app config
dotenv.config();
const app = express();
const port = process.env.PORT;
// db connection
connectDB();
// middleware
app.use(express.json());
app.use(cors());
// 
app.get("/", (req, res) => {
  res.send("server started");
});
app.listen(port, (req, res) => {
  console.log(`server is running on http://localhost:${port}`);
});
