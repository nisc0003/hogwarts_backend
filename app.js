import express from "express";
import { houseRouter } from "./routes/houses.router.js";

const app = express();
app.use(express.json());
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use("/houses", houseRouter);
