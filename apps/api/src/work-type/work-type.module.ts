import { Module } from '@nestjs/common';
import { WorkTypeService } from './work-type.service';
import { WorkTypeController } from './work-type.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [WorkTypeController],
  providers: [WorkTypeService, PrismaService],
})
export class WorkTypeModule {}
