import express from "express";
import { courseRouter } from "./routes/courses.router.js";
import { houseRouter } from "./routes/houses.router.js";
import { studentRouter } from "./routes/students.router.js";
import { teacherRouter } from "./routes/teachers.router.js";

const app = express();
app.use(express.json());
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use("/houses", houseRouter);
app.use("/courses", courseRouter);
app.use("/students", studentRouter);
app.use("/teachers", teacherRouter);
