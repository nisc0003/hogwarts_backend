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

export const getStudentById = async (req, res) => {
  try {
    const student = await studentsRepository.getStudentById(req.params.id);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.status(200).json(student);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
