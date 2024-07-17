import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const poolConfig = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || "5432"),
};

const pool = new Pool(poolConfig);

pool.on("connect", () => {
  console.log("Connected to database.");
  console.log(poolConfig);
});

export default pool;
