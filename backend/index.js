import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import router from "./routes/auth.route.js";
import connectDB from "./config/db.js";

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;  

app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(" Server started on port", PORT);
});
