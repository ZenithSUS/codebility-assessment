import express, { Application } from "express";
import { logger } from "./middleware/logger.js";
import cors from "cors";
import todoRouter from "./routes/todo-routes.js";
import { notFound } from "./middleware/not-found.js";

// Express Config
const app: Application = express();

// Middlewares
app.use(logger);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/todos", todoRouter);

// Not Found
app.use(notFound);

export default app;
