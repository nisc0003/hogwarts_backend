import * as studentsRepository from "../repositories/students.repository.js";

export const getAllStudents = async (req, res) => {
  try {
    const allStudents = await studentsRepository.getAllStudents();
    res.json(allStudents);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error", code: err.code });
  }
};
