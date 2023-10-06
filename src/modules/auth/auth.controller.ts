import { NextFunction, Request, Response } from 'express';
import { HttpStatusCode } from 'axios';
import { CreateUserDto } from '@/dto/auth.dto';
import { AuthService } from './auth.service';
import { Api } from '@/lib/api';

export class AuthController extends Api {
    private readonly user = new AuthService();

    public createUser = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const data: CreateUserDto = req.body;
            const user = await this.user.createUser(data);

            this.send(res, user, HttpStatusCode.Created, 'Created');
        } catch (e) {
            next(e);
        }
    };
}
