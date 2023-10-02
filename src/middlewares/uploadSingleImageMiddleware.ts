import { join } from 'path'
import { NextFunction, Request, Response } from 'express'
import { StatusCodes, ReasonPhrases } from 'http-status-codes'

import { uploadSingleImage } from '@/infrastructure/upload'
import { STORAGE_PATH } from '@/config/config'

export const uploadSingleImageMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    uploadSingleImage(req, res, err => {
      if (err || !req.file) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: ReasonPhrases.BAD_REQUEST,
          status: StatusCodes.BAD_REQUEST
        })
      }

      Object.assign(req, {
        file: {
          ...req.file,
          destination: STORAGE_PATH,
          path: join(STORAGE_PATH, req.file.filename)
        }
      })

      return next()
    })
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: ReasonPhrases.BAD_REQUEST,
      status: StatusCodes.BAD_REQUEST
    })
  }
}
