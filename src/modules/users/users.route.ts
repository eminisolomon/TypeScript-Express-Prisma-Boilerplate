import { Router } from 'express';
import { UserController } from './users.controller';
import { verifyAuthToken } from '@/middlewares/auth.middleware';

const users = Router();
const controller = new UserController();

/**
 * GET /users/:userId
 * @summary Get user by ID
 * @tags users
 * @param {string} request.params.userId.required - User ID
 * @return {User} 200 - User object
 */
users.get('/:userId', verifyAuthToken, controller.getUser);

/**
 * GET /users
 * @summary Get all users
 * @tags users
 * @return {User[]} 200 - Array of user objects
 */
users.get('/', verifyAuthToken, controller.getUsers);

export { users };
