import express from "express";
import { v4 as uuidv4 } from "uuid";
import conn from "../config/db.js";

import { TaskController } from "../controllers/taskController.js";

const router = express.Router();

router.get("/", TaskController.getAllTasks);

router.post("/add", TaskController.addTask);

router.put("/update/:id", TaskController.updateTask);

router.delete("/delete/:id", TaskController.deleteTask);

export default router;
