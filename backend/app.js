import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import taskRoutes from "./routes/index.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
const PORT = 5000;

app.get("/", (req, res) => {
  return res.json({
    status: 200,
    message: "Server status is OK",
  });
});

app.use("/task", taskRoutes);

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT - ${PORT}`);
});
