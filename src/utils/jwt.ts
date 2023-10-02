import jwt from 'jsonwebtoken'
import { ObjectId } from 'mongoose'

import { IAccessToken, IJwtUser } from '@/contracts/jwt'
import { JWT_SECRET, JWT_EXPIRATION } from '@/config/config'

export const jwtSign = (id: ObjectId): IAccessToken => {
  const accessToken = jwt.sign({ id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRATION
  })

  return { accessToken }
}

export const jwtVerify = ({ accessToken }: { accessToken: string }) => {
  return jwt.verify(accessToken, JWT_SECRET) as IJwtUser
}
