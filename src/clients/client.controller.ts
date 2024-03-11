import { Request, Response } from "express";
import { ClientService } from "./client.service";
import { CreateClientDto } from "./dto/create-client.dto";
import { Client as ClientEntity } from "./entities/client.entity";

export class ClientController {
  constructor(private clientService: ClientService) {}

  createClient = async (req: Request, res: Response) => {
    try {
      const createClientDto: CreateClientDto = req.body;
      const client = await this.clientService.create(createClientDto);
      res.status(201).json(client);
    } catch (error) {
      res.status(500).json({ message: "Erro ao criar cliente" });
    }
  };

  listClients = async (req: Request, res: Response) => {
    try {
      const filter: Partial<ClientEntity> = req.query;
      let clients: ClientEntity[];

      if (Object.keys(filter).length > 0) {
        clients = await this.clientService.findWithFilter(filter);
      } else {
        clients = await this.clientService.findAll();
      }

      res.status(200).json(clients);
    } catch (error) {
      res.status(500).json({ message: "Erro ao listar clientes" });
    }
  };
}
