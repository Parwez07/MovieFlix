import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
const app = express();

//middlewares
dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT;
app.use(express.json());
app.use(cookieParser());

connectDB();
app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
