import { Pool } from "pg";

export const pool = new Pool({
  user: "pablomarconi",
  host: "localhost",
  database: "todo",
  password: "",
  port: 5432,
});

export default pool;
