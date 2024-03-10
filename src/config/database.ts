import { Client } from "pg";

const dbClient = new Client({
  host: process.env.PGHOST || "localhost",
  port: Number(process.env.PGPORT) || 5432,
  database: process.env.PGDATABASE || "testefj",
  user: process.env.PGUSER || "postgres",
  password: process.env.PGPASSWORD || "postgres",
});

const connection = async () => {
  try {
    await dbClient.connect();
    console.log(`Connected to the database ${dbClient.database}`);
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

const createTableIfNotExists = async () => {
  const query = `
   CREATE TABLE clients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(255) NOT NULL,
    x INTEGER,
    y INTEGER
);
 `;

  try {
    await dbClient.query(query);
    console.log("Table 'clients' created successfully.");
  } catch (error) {
    console.error("Error creating the table 'clients':", error);
  }
};

connection();
createTableIfNotExists();

export default dbClient;
