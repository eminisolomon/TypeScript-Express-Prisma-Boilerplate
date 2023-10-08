import { NextFunction, Request, Response } from "express";
import { Exception } from "@/exceptions";
import logger from "@/lib/logger";

export const ErrorMiddleware = (
  error: Exception,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const status: number = error.statusCode || 500;
    const message: string = error.message || "Something went wrong";

    logger.error(
      `[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`
    );
    
    res.status(status).json({
      success: false,
      message,
      rawErrors: error.rawErrors,
    });
  } catch (error) {
    next(error);
  }
};
