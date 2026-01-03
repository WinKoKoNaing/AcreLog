import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateAcreRecordDto } from './dto/create-acre-record.dto';
import { UpdateAcreRecordDto } from './dto/update-acre-record.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AcreRecordService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateAcreRecordDto) {
    const tractor = await this.prisma.tractor.findUnique({
      where: { id: dto.tractorId },
    });

    if (!tractor || !tractor.isActive) {
      throw new BadRequestException('Invalid tractor');
    }

    if (tractor.status !== 'AVAILABLE') {
      throw new BadRequestException('Tractor not available');
    }

    // 2️⃣ Calculate total
    const totalAmount = dto.ratePerAcre ? dto.ratePerAcre * dto.acres : null;

    // 3️⃣ Create record
    return this.prisma.acreRecord.create({
      data: {
        farmerId: dto.farmerId,
        tractorId: dto.tractorId,
        workTypeId: dto.workTypeId,
        date: new Date(dto.date),
        acres: dto.acres,
        ratePerAcre: dto.ratePerAcre,
        totalAmount,
      },
    });
  }

  findByFarmer(farmerId: string) {
    return this.prisma.acreRecord.findMany({
      where: { farmerId },
      include: {
        workType: true,
        tractor: true,
      },
      orderBy: { date: 'desc' },
    });
  }

  findByDateRange(from: Date, to: Date) {
    return this.prisma.acreRecord.findMany({
      where: {
        date: {
          gte: from,
          lte: to,
        },
      },
      include: {
        farmer: true,
        workType: true,
      },
    });
  }

  findAll() {
    return this.prisma.acreRecord.findMany();
  }

  findOne(id: string) {
    return this.prisma.acreRecord.findUnique({
      where: { id },
    });
  }

  async update(id: string, dto: UpdateAcreRecordDto) {
    const record = await this.prisma.acreRecord.findUnique({
      where: { id },
    });

    if (!record) {
      throw new NotFoundException();
    }

    // Optional rule: same-day edits only
    const isSameDay = record.date.toDateString() === new Date().toDateString();

    if (!isSameDay) {
      throw new BadRequestException('Only same-day edits allowed');
    }

    const totalAmount =
      dto.ratePerAcre && record.acres
        ? dto.ratePerAcre * record.acres
        : record.totalAmount;

    return this.prisma.acreRecord.update({
      where: { id },
      data: {
        ...dto,
        totalAmount,
      },
    });
  }

  // remove(id: string) {
  //   return this.prisma.acreRecord.delete({
  //     where: { id },
  //   });
  // }
}
