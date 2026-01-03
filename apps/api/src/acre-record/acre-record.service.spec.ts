import { Test, TestingModule } from '@nestjs/testing';
import { AcreRecordService } from './acre-record.service';

describe('AcreRecordService', () => {
  let service: AcreRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AcreRecordService],
    }).compile();

    service = module.get<AcreRecordService>(AcreRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
