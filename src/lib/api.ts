import { HttpStatusCode } from 'axios';
import { Response } from 'express';
import environment from './environment';
import logger from './logger';

export abstract class Api {
  public send<T>(
    res: Response,
    data: T,
    statusCode: number = HttpStatusCode.Ok,
    message: string = 'success'
  ) {
    if (!environment.isDev()) {
      logger.info(JSON.stringify(data, null, 2));
    }

    return res.status(statusCode).json({
      message,
      data,
    });
  }

  public download(
    res: Response,
    statusCode: number = HttpStatusCode.Ok,
    path: string
  ) {
    if (!environment.isDev()) {
      logger.info(`Downloaded file: ${path}`);
    }

    res.status(statusCode).download(path);
  }
}
