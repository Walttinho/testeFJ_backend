import { Request, Response } from "express";
import { CircuitService } from "./circuit.service";

export class CircuitController {
  constructor(private circuitService: CircuitService) {}

  calculateShortestCircuit = async (req: Request, res: Response) => {
    try {
      const totalDistance =
        await this.circuitService.calculateShortestCircuit();
      if (totalDistance === null) {
        return res.status(404).json({
          message: "No clients found to calculate the shortest circuit.",
        });
      }
      res.status(200).json({ totalDistance });
    } catch (error: any) {
      res.status(500).json({
        message: "Error calculating shortest circuit",
        error: error.message,
      });
    }
  };
}
