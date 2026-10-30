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
