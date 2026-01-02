import { Injectable } from '@nestjs/common';
import { CreateFarmerDto } from './dto/create-farmer.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Farmer } from './entities/farmer.entity';

@Injectable()
export class FarmerService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateFarmerDto): Promise<Farmer> {
    return this.prisma.farmer.create({ data });
  }

  findAll(): Promise<Farmer[]> {
    return this.prisma.farmer.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  findOne(id: string): Promise<Farmer | null> {
    return this.prisma.farmer.findUnique({ where: { id } });
  }
}
