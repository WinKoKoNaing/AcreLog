import { Test, TestingModule } from '@nestjs/testing';
import { TractorService } from './tractor.service';
import { describe, it, expect, beforeEach } from '@jest/globals';

describe('TractorService', () => {
  let service: TractorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TractorService],
    }).compile();

    service = module.get<TractorService>(TractorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
