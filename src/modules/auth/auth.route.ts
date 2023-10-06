import { Router } from 'express';
import { AuthController } from './auth.controller';
import { CreateUserDto } from '@/dto/auth.dto';
import { RequestValidator } from '@/middlewares/request-validator';

const auth = Router();
const controller = new AuthController();

/**
 * Create user body
 * @typedef {object} CreateUserBody
 * @property {string} email.required - email of user
 * @property {string} name.required - name of user
 * @property {string} cognitoId.required - cognito id
 * @property {string} phone - phone number
 */
/**
 * User
 * @typedef {object} User
 * @property {string} email - email of user
 * @property {string} name - name of user
 * @property {string} cognitoId - cognito id
 * @property {string} phone - phone number
 */
/**
 * POST /users/create
 * @summary Create user
 * @tags users
 * @param {CreateUserBody} request.body.required
 * @return {User} 201 - user created
 */
auth.post(
  '/create',
  RequestValidator.validate(CreateUserDto),
  controller.createUser
);

export { auth };