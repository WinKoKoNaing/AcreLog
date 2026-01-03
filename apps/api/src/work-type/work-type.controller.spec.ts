import { Test, TestingModule } from '@nestjs/testing';
import { WorkTypeController } from './work-type.controller';
import { WorkTypeService } from './work-type.service';
import { beforeEach, describe, expect, it } from '@jest/globals';

describe('WorkTypeController', () => {
  let controller: WorkTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkTypeController],
      providers: [WorkTypeService],
    }).compile();

    controller = module.get<WorkTypeController>(WorkTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
