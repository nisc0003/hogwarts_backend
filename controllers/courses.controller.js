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

export const updateCourse = async (req, res) => {
  try {
    const { name, teacher_id: teacherId } = req.body;
    const course = await coursesRepository.updateCourse(
      req.params.id,
      name,
      teacherId,
    );

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    res.status(200).json(course);
  } catch (err) {
    console.log(err);
    if (err.code === "23503") {
      return res.status(400).json({ error: "Invalid teacher_id" });
    }
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const deleted = await coursesRepository.deleteCourse(req.params.id);

    if (deleted === 0) {
      return res.status(404).json({ error: "Course not found" });
    }

    res.status(204).send();
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateCourseTeacher = async (req, res) => {
  try {
    const course = await coursesRepository.updateCourseTeacher(
      req.params.id,
      req.body.teacher_id,
    );

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    res.status(200).json(course);
  } catch (err) {
    console.log(err);
    if (err.code === "23503") {
      return res.status(400).json({ error: "Invalid teacher_id" });
    }
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getCourseStudents = async (req, res) => {
  try {
    const course = await coursesRepository.getCourseById(req.params.id);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    const students = await coursesRepository.getCourseStudents(req.params.id);
    res.status(200).json(students);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const addStudentToCourse = async (req, res) => {
  try {
    const enrollment = await coursesRepository.addStudentToCourse(
      req.params.id,
      req.body.student_id,
    );
    res.status(201).json(enrollment);
  } catch (err) {
    console.log(err);
    if (err.code === "23503") {
      return res.status(404).json({ error: "Course or student not found" });
    }
    if (err.code === "23505") {
      return res.status(409).json({ error: "Student is already enrolled" });
    }
    res.status(500).json({ error: "Internal server error" });
  }
};

export const removeStudentFromCourse = async (req, res) => {
  try {
    const removed = await coursesRepository.removeStudentFromCourse(
      req.params.id,
      req.params.studentId,
    );

    if (removed === 0) {
      return res.status(404).json({ error: "Enrollment not found" });
    }

    res.status(204).send();
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
