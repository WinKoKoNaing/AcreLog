import { Test, TestingModule } from '@nestjs/testing';
import { TractorController } from './tractor.controller';
import { TractorService } from './tractor.service';
import { describe, it, expect, beforeEach } from '@jest/globals';

describe('TractorController', () => {
  let controller: TractorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TractorController],
      providers: [TractorService],
    }).compile();

    controller = module.get<TractorController>(TractorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
