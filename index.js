import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.js";
import authRoutes from "./routes/auth.js";
import roomsRoutes from "./routes/rooms.js";
import hotelsRoutes from "./routes/hotels.js";

//config
dotenv.config();

const app = express();

//mongoDB
const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO, () => {
      console.log("Connected to mongoDB DataBase");
    });
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("connected", () => {
  console.log("mongoDB is connected");
});
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB is disconnected");
});

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/rooms", roomsRoutes);
app.use("/api/hotels", hotelsRoutes);

app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMsg = err.message || "error occured";
  return res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: err.stack,
  });
});

app.listen(process.env.PORT || 8800, () => {
  console.log("Connected to backend");
  connectToDB();
});
