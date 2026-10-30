import express from "express";
import * as coursesController from "../controllers/courses.controller.js";

export const courseRouter = express.Router();

courseRouter.get("/", coursesController.getAllCourses);
courseRouter.get("/:id", coursesController.getCourseById);
