import express, { Application, Express, Request, Response } from "express";
import { validateEnv } from "./config/config";
import { dbConnect } from "./config/dbConnect";
import path from "path";
import cors from "cors";

const app: Application = express();
const port = 8000;

// chacking env
validateEnv();

//establish db connect
dbConnect();

app.use(express.json);
app.use(cors());

app.use("/api/image");

app.use("/health", (req: Request, res: Response) => {
  res.send("Server is running....");
});
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
