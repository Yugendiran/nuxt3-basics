import conn from "../config/db.js";
import sqlString from "sqlstring";

export class TaskController {
  static getAllTasks(req, res) {
    let query = sqlString.format("SELECT * FROM tasks");

    conn.query(query, (err, result) => {
      if (err) {
        console.log(err);

        return res.json({
          success: false,
          message: "Something went wrong",
        });
      }

      let tasks = result;

      for (let i = 0; i < tasks.length; i++) {
        tasks[i].isCompleted = tasks[i].isCompleted == 1 ? true : false;
      }

      return res.json({
        success: true,
        tasks,
      });
    });
  }

  static addTask(req, res) {
    const text = req.body.text;

    if (!text) {
      return res.json({
        success: false,
        message: "Please provide task",
      });
    }

    let query = sqlString.format("INSERT INTO tasks SET ?", [
      {
        text: text,
      },
    ]);

    conn.query(query, (err, result) => {
      if (err) {
        console.log(err);

        return res.json({
          success: false,
          message: "Something went wrong",
        });
      }

      return res.json({
        success: true,
        message: "Task added successfully",
      });
    });
  }

  static updateTask(req, res) {
    const id = req.params.id;
    const text = req.body.text;
    const isCompleted = req.body.isCompleted;

    let query = sqlString.format(
      `UPDATE tasks SET text = ?, isCompleted = ? WHERE id = ?`,
      [text, isCompleted, id]
    );

    conn.query(query, (err, result) => {
      if (err) {
        console.log(err);

        return res.json({
          success: false,
          message: "Something went wrong",
        });
      }

      return res.json({
        success: true,
        message: "Task updated successfully",
      });
    });
  }

  static deleteTask(req, res) {
    const id = req.params.id;

    let query = sqlString.format(`DELETE FROM tasks WHERE id = ?`, [id]);

    conn.query(query, (err, result) => {
      if (err) {
        console.log(err);

        return res.json({
          success: false,
          message: "Something went wrong",
        });
      }

      return res.json({
        success: true,
        message: "Task deleted successfully",
      });
    });
  }
}
