import { Request, Response, NextFunction } from "express";

export const errorHandler = (err: { statusCode: number; message: string; stack: any; }, req: Request, res: Response, next: NextFunction)=> {
  const statusCode = err.statusCode || 500;

  const message = err.message || "Happened a unexpected error";
  console.error(`[ERROR] ${new Date().toISOString()} - ${statusCode} - ${message}`);
  if(err.stack){
    console.error(err.stack);
  }

  res.status(statusCode).json({
    status: "Error",
    message,
    ...(process.env.NODE_ENV === "development" && {stack: err.stack})
  })
}