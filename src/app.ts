import express, { Application, Request, Response } from "express";
const app: Application = express();

const PORT: number = 3000;

require("./model/index");

app.get("/", (req: Request, res: Response) => {
  res.send("hellow");
});

app.listen(PORT, () => {
  console.log(`App running in ${PORT}`);
});
