import { Request, Response, NextFunction } from "express";
export const loggerMiddleware = (req: Request, res: Response, next: NextFunction)=> {
  const timeStamp = new Date().toISOString();

  console.log(`
    [${timeStamp} ${req.method} ${req.url} - IP: ${req.ip}]
  `)
  const start = Date.now();

  res.on("finish", ()=> {
    const duration = Date.now() - start;
    console.log(`[${timeStamp} Response: ${res.statusCode} - ${duration}ms]`)
  })
  next()
}