import * as teachersRepository from "../repositories/teachers.repository.js";

export const getAllTeachers = async (req, res) => {
  try {
    const allTeachers = await teachersRepository.getAllTeachers();
    res.json(allTeachers);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error", code: err.code });
  }
};

export const getTeacherById = async (req, res) => {
  try {
    const teacher = await teachersRepository.getTeacherById(req.params.id);
    if (!teacher) {
      return res.status(404).json({ error: "Teacher not found" });
    }
    res.status(200).json(teacher);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createTeacher = async (req, res) => {
  try {
    const { name, house_id: houseId } = req.body;
    const teacher = await teachersRepository.createTeacher(name, houseId);
    res.status(201).json(teacher);
  } catch (err) {
    console.log(err);
    if (err.code === "23503") {
      return res.status(400).json({ error: "Invalid houseId" });
    }
    res.status(500).json({ error: "Internal server error" });
  }
};
