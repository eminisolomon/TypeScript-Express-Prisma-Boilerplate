import util from 'util';
import { NextFunction, Request, Response } from 'express';
import { HttpStatusCode } from 'axios';
import logger from '@/lib/logger';
import environment from '@/lib/environment';
import { Exception } from '@/exceptions/Exception';

interface ErrorBody {
  success: false;
  message: string;
  rawErrors?: string[];
  stack?: string;
}

const errorHandler = (
  err: Exception,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(`Request Error:
        \nError:\n${JSON.stringify(err)}
        \nHeaders:\n${util.inspect(req.headers)}
        \nParams:\n${util.inspect(req.params)}
        \nQuery:\n${util.inspect(req.query)}
        \nBody:\n${util.inspect(req.body)}`);

  const status: number = err.statusCode ?? HttpStatusCode.InternalServerError;
  const errorBody: ErrorBody = {
    success: false,
    message: err.message,
    rawErrors: err.rawErrors,
  };

  if (environment.isDev()) {
    errorBody.stack = err.stack;
  }

  res.status(status).send(errorBody);

  next();
};

export default errorHandler;