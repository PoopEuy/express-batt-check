//import
import express from "express";
import * as dotenv from "dotenv";
import Router from "./routes/routes.js";
import axios from "axios";
import cors from "cors";
dotenv.config();
const app = express();
const PORT = process.env.PORT;

console.log("PORT : " + PORT);
// Use Router
app.use(Router);

app.use(express.static("static"));
app.use(express.json());
app.use(cors());

// listen on port
app.listen(PORT, async function () {
  try {
    console.log("Connection has been established successfully.");

    return console.log(`Server Berjalan pada 1port ${PORT}`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
