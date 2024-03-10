import express from "express";
import { CircuitService } from "./circuit.service";
import { CircuitController } from "./circuit.controller";

const circuitRouter = express.Router();
const circuitService = new CircuitService();
const circuitController = new CircuitController(circuitService);

circuitRouter.get("/", circuitController.calculateShortestCircuit);

export default circuitRouter;
