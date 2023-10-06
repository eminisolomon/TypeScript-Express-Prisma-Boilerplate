import { NotFoundException } from '@/exceptions';
import { Users } from '@/interfaces/users.interface';
import prisma from '@/lib/prisma';

export class UserService {
    public async getUser(userId: string): Promise<Users> {
        const user = await prisma.users.findUnique({
            where: {
                id: userId,
            },
        });

        if (!user) {
            throw new NotFoundException(`User with ID ${userId} not found`);
        }

        return user;
    }

    public async getUsers(): Promise<Users[]> {
        const users = await prisma.users.findMany();

        return users;
    }
}
