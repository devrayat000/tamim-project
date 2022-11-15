import { fileURLToPath } from "node:url";
import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { PrismaClient } from "@prisma/client";

const __filename = fileURLToPath(import.meta.url);
const __dirname = fileURLToPath(new URL(".", import.meta.url));

const app = express();
const db = new PrismaClient({});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/projects", async (req, res) => {
  const projects = await db.project.findMany();
  res.json({ projects }).end();
});

app.post("/projects", async (req, res) => {
  const newProject = await db.project.create({ data: req.body });
  res.json({ newProject }).end();
});

app.get("/projects/:id", async (req, res) => {
  const project = await db.project.findUnique({ where: { id: req.params.id } });
  res.json({ project }).end();
});

export default app;
