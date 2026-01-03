import { Injectable } from '@nestjs/common';
import { CreateWorkTypeDto } from './dto/create-work-type.dto';
import { UpdateWorkTypeDto } from './dto/update-work-type.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WorkTypeService {
  constructor(private prisma: PrismaService) {}

  create(createWorkTypeDto: CreateWorkTypeDto) {
    return this.prisma.workType.create({ data: createWorkTypeDto });
  }

  findAll() {
    return this.prisma.workType.findMany({
      where: { isActive: true },
      orderBy: { name: 'asc' },
    });
  }

  findOne(id: string) {
    return this.prisma.workType.findUnique({ where: { id } });
  }

  update(id: string, updateWorkTypeDto: UpdateWorkTypeDto) {
    return this.prisma.workType.update({
      where: { id },
      data: updateWorkTypeDto,
    });
  }

  remove(id: string) {
    return this.prisma.workType.update({
      where: { id },
      data: { isActive: false },
    });
  }
}
