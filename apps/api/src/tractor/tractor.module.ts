import { Module } from '@nestjs/common';
import { TractorService } from './tractor.service';
import { TractorController } from './tractor.controller';

@Module({
  controllers: [TractorController],
  providers: [TractorService],
})
export class TractorModule {}
