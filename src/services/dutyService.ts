import pool from "../database";
import { Duty } from "../models/duty";

export const getAllDuties = async (): Promise<Duty[]> => {
  const result = await pool.query("SELECT * FROM duties ORDER BY id");
  return result.rows;
};

export const createDuty = async (name: string): Promise<Duty> => {
  try {
    const result = await pool.query(
      "INSERT INTO duties (name) VALUES ($1) RETURNING *",
      [name]
    );
    console.log("return from createDuty:", result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error("Error creating duty:", error);
    throw error;
  }
};

export const updateDuty = async (id: string, name: string): Promise<Duty> => {
  const result = await pool.query(
    "UPDATE duties SET name = $1 WHERE id = $2 RETURNING *",
    [name, id]
  );
  return result.rows[0];
};

export const deleteDuty = async (id: string): Promise<Duty> => {
  const result = await pool.query(
    "DELETE FROM duties WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};
