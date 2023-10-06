export interface IVerification {
  email: string
  accessToken: string
  expiresIn: Date
  user: IUser
}

export interface IResetPassword {
  accessToken: string
  expiresIn: Date
  user: IUser
}

export interface IUser {
  id: number
  email: string
  password: string
  firstName?: string
  lastName?: string
  verified: boolean
  verifications?: string[]
  resetPasswords?: string[]
}