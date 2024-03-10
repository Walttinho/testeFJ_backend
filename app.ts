import express from "express";
import clientRouter from "./src/clients/client.route";
import circuitRouter from "./src/circuit/circuit.route";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const app = express();

app.use(express.json());

app.use("/clients", clientRouter);
app.use("/circuit", circuitRouter);


export default app