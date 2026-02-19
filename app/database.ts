// app/database.ts
import knex from "knex";
import config from "./knexfile";

// Define o ambiente (development, production, etc)
const environment = process.env.NODE_ENV || "development";
const connection = knex(config[environment]);

export default connection;