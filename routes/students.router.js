import express from "express";
import * as studentsController from "../controllers/students.controller.js";

export const studentRouter = express.Router();

studentRouter.get("/", studentsController.getAllStudents);
studentRouter.get("/:id", studentsController.getStudentById);
studentRouter.post("/", studentsController.createStudent);
studentRouter.put("/:id", studentsController.updateStudent);
studentRouter.delete("/:id", studentsController.deleteStudent);
