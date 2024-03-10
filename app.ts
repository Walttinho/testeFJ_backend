import express from "express";
import clientRouter from "./src/clients/client.route";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const app = express();

app.use(express.json());

app.use("/clients", clientRouter);

export default app