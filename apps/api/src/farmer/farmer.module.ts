import { Module } from '@nestjs/common';
import { FarmerController } from './farmer.controller';
import { FarmerService } from './farmer.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [FarmerController],
  providers: [FarmerService, PrismaService],
})
export class FarmerModule {}
