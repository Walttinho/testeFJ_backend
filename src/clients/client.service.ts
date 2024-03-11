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

  async findWithFilter(filter: Partial<ClientEntity>): Promise<ClientEntity[]> {
    let query = "SELECT * FROM clients WHERE 1=1";
    const parameters: any[] = [];

    if (filter.name) {
      query += " AND name = $1";
      parameters.push(filter.name);
    }
    if (filter.email) {
      query += " AND email = $2";
      parameters.push(filter.email);
    }
    if (filter.phone) {
      query += " AND phone = $3";
      parameters.push(filter.phone);
    }
    if (filter.x) {
      query += " AND x = $4";
      parameters.push(filter.x);
    }
    if (filter.y) {
      query += " AND y = $5";
      parameters.push(filter.y);
    }

    const result = await dbClient.query(query, parameters);
    return result.rows;
  }
}

