import { Injectable } from '@nestjs/common';
import { CreateFarmerDto } from '@repo/api';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FarmerService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateFarmerDto) {
    return this.prisma.farmer.create({ data });
  }

  findAll() {
    return this.prisma.farmer.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  findOne(id: string) {
    return this.prisma.farmer.findUnique({ where: { id } });
  }
}
