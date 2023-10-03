import { CLIENT_URL } from '@/config/config'
import cors from 'cors'
import { StatusCodes } from 'http-status-codes'

export const corsMiddleware = cors({
  origin: CLIENT_URL,
  optionsSuccessStatus: StatusCodes.OK
})
