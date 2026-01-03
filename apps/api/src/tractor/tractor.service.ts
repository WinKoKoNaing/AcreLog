import { Injectable } from '@nestjs/common';
import { CreateTractorDto } from './dto/create-tractor.dto';
import { UpdateTractorDto } from './dto/update-tractor.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TractorService {
  constructor(private prisma: PrismaService) {}

  create(createTractorDto: CreateTractorDto) {
    return this.prisma.tractor.create({
      data: createTractorDto,
    });
  }

  findAll() {
    return this.prisma.tractor.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  findOne(id: string) {
    return this.prisma.tractor.findUnique({
      where: { id },
    });
  }

  update(id: string, updateTractorDto: UpdateTractorDto) {
    return this.prisma.tractor.update({
      where: { id },
      data: updateTractorDto,
    });
  }

  remove(id: string) {
    return this.prisma.tractor.delete({
      where: { id },
    });
  }
}
