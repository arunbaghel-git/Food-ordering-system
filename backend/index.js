import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import route from "./routes/foodRoute.js";
// app config
dotenv.config();
const app = express();
const port = process.env.PORT;
// middleware
app.use(express.json());
app.use(cors());
// db connection
connectDB();
// api endpoints
app.use("/api/food", route);
app.use('/images',express.static('uploads'))
//
app.get("/", (req, res) => {
  res.send("server started");
});
// 404 HANDLER
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});
// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  const statusCode  = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

app.listen(port, (req, res) => {
  console.log(`server is running on http://localhost:${port}`);
});
