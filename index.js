import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import jobRoutes from "./routes/jobRoutes.js";
import connectToMongo from "./db.js";
const app = express();
const PORT = process.env.PORT || 5000;
const url = process.env.DB_URL;
connectToMongo(url);
app.use(express.json());
app.use(cors());
app.use('/', jobRoutes);

app.listen(PORT,(req,res)=>{
    console.log("Listening on Port 5000!!");
})