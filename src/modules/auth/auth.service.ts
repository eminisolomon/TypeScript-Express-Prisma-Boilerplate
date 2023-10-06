import { CreateUserDto } from '@/dto/auth.dto';
import { Users } from '@/interfaces/users.interface';
import prisma from '@/lib/prisma';

export class AuthService {
    public async createUser(data: CreateUserDto): Promise<Users> {
        const user = await prisma.users.create({ data });

        return user;
    }
}
