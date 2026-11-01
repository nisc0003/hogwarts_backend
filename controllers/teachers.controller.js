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

export const deleteTeacher = async (req, res) => {
  try {
    const deleted = await teachersRepository.deleteTeacher(req.params.id);

    if (deleted === 0) {
      return res.status(404).json({ error: "Teacher not found" });
    }

    res.status(204).send();
  } catch (err) {
    console.log(err);

    if (err.code === "23001" || err.code === "23503") {
      return res.status(409).json({
        error: "Teacher is assigned to a course and cannot be deleted",
      });
    }

    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateTeacher = async (req, res) => {
  try {
    const { name, house_id: houseId } = req.body;

    const teacher = await teachersRepository.updateTeacher(
      req.params.id,
      name,
      houseId,
    );

    if (!teacher) {
      return res.status(404).json({ error: "Teacher not found" });
    }

    res.status(200).json(teacher);
  } catch (err) {
    console.log(err);

    if (err.code === "23503") {
      return res.status(400).json({ error: "Invalid houseId" });
    }

    res.status(500).json({ error: "Internal server error" });
  }
};
