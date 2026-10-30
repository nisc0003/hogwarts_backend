import { pool } from "../db.js";

export async function getAllTeachers() {
  const result = await pool.query("SELECT * FROM teachers");
  return result.rows;
}

export async function getTeacherById(id) {
  const result = await pool.query("SELECT * FROM teachers WHERE id = $1", [id]);
  return result.rows[0];
}

export async function createTeacher(name, houseId) {
  const result = await pool.query(
    "INSERT INTO teachers (name, house_id) VALUES ($1, $2) RETURNING *",
    [name, houseId],
  );
  return result.rows[0];
}
