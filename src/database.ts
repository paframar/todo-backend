import dotenv from "dotenv";
dotenv.config();

import { Pool } from "pg";

export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || "5432"),
  connectionString: process.env.DATABASE_URL,
});

pool.on("connect", () => {
  console.log("Connected to database at:", process.env.DATABASE_URL);
});

export default pool;
