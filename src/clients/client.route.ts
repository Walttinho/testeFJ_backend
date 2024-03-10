import express from "express";
import { ClientService } from "./client.service";
import { ClientController } from "./client.controller";

const clientRouter = express.Router();
const clientService = new ClientService();
const clientController = new ClientController(clientService);

// Rota para criar um novo cliente
clientRouter.post("/", clientController.createClient);

// Rota para listar todos os clientes
clientRouter.get("/", clientController.listClients);

export default clientRouter;
