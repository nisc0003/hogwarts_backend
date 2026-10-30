import express from "express";
import * as teachersController from "../controllers/teachers.controller.js";

export const teacherRouter = express.Router();

teacherRouter.get("/", teachersController.getAllTeachers);
