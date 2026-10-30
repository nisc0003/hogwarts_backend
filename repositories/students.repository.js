import { pool } from "../db.js";

export async function getAllStudents() {
  const result = await pool.query("SELECT * FROM students");
  return result.rows;
}

export async function getStudentById(id) {
  const result = await pool.query("SELECT * FROM students WHERE id = $1", [id]);
  return result.rows[0];
}

export async function createStudent(name, semester, houseId) {
  const result = await pool.query(
    "INSERT INTO students (name, semester, house_id) VALUES ($1, $2, $3) RETURNING *",
    [name, semester, houseId],
  );
  return result.rows[0];
}
