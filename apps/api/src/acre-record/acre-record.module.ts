import { Module } from '@nestjs/common';
import { AcreRecordService } from './acre-record.service';
import { AcreRecordController } from './acre-record.controller';

@Module({
  controllers: [AcreRecordController],
  providers: [AcreRecordService],
})
export class AcreRecordModule {}
