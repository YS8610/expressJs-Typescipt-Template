import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/CustomError";

import { clogger } from "../service/logger";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  // Handled errors
  if(err instanceof CustomError) {
    const { statusCode, errors, logging } = err;
    if(logging) {
      clogger.error(JSON.stringify({
        code: statusCode,
        errors: errors,
        stack: err.stack,
      }, null, 2));
    }
    res.status(statusCode).send({ errors });
    return;
  }

  // Unhandled errors
  clogger.error(JSON.stringify(err, null, 2));
  res.status(500).json({ errors: [{ message: "Something went wrong" }] });
  return;
};