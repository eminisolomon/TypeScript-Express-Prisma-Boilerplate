import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { Request, Response, NextFunction } from 'express';
import logger from '@/lib/logger';
import { BadRequestException } from '@/exceptions/BadRequest';

export class RequestValidator {
  static validate = <T>(classInstance: ClassConstructor<T>) => {
    return async (req: Request, _res: Response, next: NextFunction) => {
      const validationErrorText = 'Request validation failed!';
      try {
        const convertedObject = plainToInstance(classInstance, req.body);
        const errors = await validate(
          convertedObject as Record<string, unknown>
        );
        if (!errors.length) next();
        const rawErrors: string[] = [
          ...new Set([
            ...errors.flatMap((error) =>
              Object.values(error.constraints ?? [])
            ),
          ]),
        ];
        logger.error(rawErrors);
        next(new BadRequestException(validationErrorText, rawErrors));
      } catch (e) {
        logger.error(e);
        next(new BadRequestException(validationErrorText, [e.message]));
      }
    };
  };
}
