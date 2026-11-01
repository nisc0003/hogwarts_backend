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

export const createStudent = async (req, res) => {
  try {
    const { name, semester, house_id: houseId } = req.body;
    const student = await studentsRepository.createStudent(
      name,
      semester,
      houseId,
    );
    res.status(201).json(student);
  } catch (err) {
    console.log(err);
    if (err.code === "23503") {
      return res.status(400).json({ error: "Invalid house_id" });
    }
    if (err.code === "23514") {
      return res.status(400).json({ error: "Semester must be at least 1" });
    }
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const { name, semester, house_id: houseId } = req.body;
    const student = await studentsRepository.updateStudent(
      req.params.id,
      name,
      semester,
      houseId,
    );

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.status(200).json(student);
  } catch (err) {
    console.log(err);
    if (err.code === "23503") {
      return res.status(400).json({ error: "Invalid house_id" });
    }
    if (err.code === "23514") {
      return res.status(400).json({ error: "Semester must be at least 1" });
    }
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const deleted = await studentsRepository.deleteStudent(req.params.id);

    if (deleted === 0) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.status(204).send();
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
