import dbClient from "../config/database";
import { CreateClientDto } from "./dto/create-client.dto";
import { Client as ClientEntity } from "./entities/client.entity";

export class ClientService {
  async create(createClientDto: CreateClientDto): Promise<ClientEntity> {
    const { name, email, phone, x, y } = createClientDto;
    const result = await dbClient.query(
      "INSERT INTO clients (name, email, phone, x, y) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, email, phone, x, y]
    );
    return result.rows[0];
  }

  async findAll(): Promise<ClientEntity[]> {
    const result = await dbClient.query("SELECT * FROM clients");
    return result.rows;
  }
}
