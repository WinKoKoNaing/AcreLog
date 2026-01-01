import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FarmerService } from './farmer.service';
import { CreateFarmerDto } from '@repo/api';

@Controller('farmers')
export class FarmerController {
  constructor(private readonly farmerService: FarmerService) {}

  @Post()
  create(
    @Body()
    body: CreateFarmerDto,
  ) {
    return this.farmerService.create(body);
  }

  @Get()
  findAll() {
    return this.farmerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.farmerService.findOne(id);
  }
}
