import express from "express";
import dotenv from "dotenv";
import Connection from "./db/database.js";
import Defaultdata from "./default.js";
import Router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();

dotenv.config();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);
const PORT = 8000;
Connection(process.env.URL);
app.listen(PORT, () => console.log("Server is running"));
Defaultdata();
