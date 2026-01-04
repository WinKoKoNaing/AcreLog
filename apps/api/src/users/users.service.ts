import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createAdmin() {
    const hashed = await bcrypt.hash('admin123', 10);

    return this.prisma.user.create({
      data: {
        name: 'Admin',
        username: 'admin',
        password: hashed,
        role: 'ADMIN',
      },
    });
  }

  findByUsername(username: string) {
    return this.prisma.user.findUnique({
      where: { username },
    });
  }
}
