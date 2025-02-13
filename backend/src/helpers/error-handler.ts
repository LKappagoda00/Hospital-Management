// write a single class for 404 and 500 error
import { Request, Response, NextFunction } from "express";

class ErrorHandler {
  static notFound(req: Request, res: Response, next: NextFunction) {
    res.status(404).json({ message: "Resource not found" });
  }

  static serverError(
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    res.status(500).json({ message: error.message });
  }
}

export default ErrorHandler;