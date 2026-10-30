import * as coursesRepository from "../repositories/courses.repository.js";

export const getAllCourses = async (req, res) => {
  try {
    const allCourses = await coursesRepository.getAllCourses();
    res.json(allCourses);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error", code: err.code });
  }
};

export const getCourseById = async (req, res) => {
  try {
    const course = await coursesRepository.getCourseById(req.params.id);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }
    res.status(200).json(course);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createCourse = async (req, res) => {
  try {
    const { name, teacher_id: teacherId } = req.body;
    const course = await coursesRepository.createCourse(name, teacherId);
    res.status(201).json(course);
  } catch (err) {
    console.log(err);
    if (err.code === "23503") {
      return res.status(400).json({ error: "Invalid teacher_id" });
    }
    res.status(500).json({ error: "Internal server error" });
  }
};
