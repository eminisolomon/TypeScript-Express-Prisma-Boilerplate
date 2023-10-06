import { NextFunction, Request, Response } from 'express';
import { HttpStatusCode } from 'axios';
import { UserService } from './users.service';
import { Api } from '@/lib/api';

export class UserController extends Api {
    private readonly user = new UserService();

    public getUser = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const userId = req.params.userId;
            const user = await this.user.getUser(userId);

            this.send(res, user, HttpStatusCode.Ok, 'User');
        } catch (e) {
            next(e);
        }
    };

    public getUsers = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const users = await this.user.getUsers();

            this.send(res, users, HttpStatusCode.Ok, 'Users');
        } catch (e) {
            next(e);
        }
    };
}
