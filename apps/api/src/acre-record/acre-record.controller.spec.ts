import { Test, TestingModule } from '@nestjs/testing';
import { AcreRecordController } from './acre-record.controller';
import { AcreRecordService } from './acre-record.service';

describe('AcreRecordController', () => {
  let controller: AcreRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcreRecordController],
      providers: [AcreRecordService],
    }).compile();

    controller = module.get<AcreRecordController>(AcreRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
