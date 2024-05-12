import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";

export function applyMiddleware(app: Application) {
  app.use(express.json()); // Parse JSON request bodies
  app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies
  app.use(cors()); // Enable CORS

  // Custom middleware example
  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`Request: ${req.method} ${req.path}`);
    next();
  });
}
