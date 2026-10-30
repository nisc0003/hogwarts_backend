import express from "express";
import * as studentsController from "../controllers/students.controller.js";

export const studentRouter = express.Router();

studentRouter.get("/", studentsController.getAllStudents);
