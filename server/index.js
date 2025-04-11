import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import http from "http";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Fixed 'false' typo
app.use(cookieParser());

const port = process.env.PORT || 5000; // Fixed 'process' typo
const server = http.createServer(app);

mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB connected");
    server.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err); // Improved error logging
    process.exit(1);
  });
