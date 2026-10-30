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
