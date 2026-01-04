import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FarmerService } from './farmer.service';
import { CreateFarmerDto } from './dto/create-farmer.dto';
import { Farmer } from './entities/farmer.entity';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('farmers')
@Controller('farmers')
export class FarmerController {
  constructor(private readonly farmerService: FarmerService) {}

  @Post()
  @ApiOperation({ summary: 'Create farmer' })
  @ApiResponse({ status: 403, description: 'Forbidden..' })
  create(
    @Body()
    body: CreateFarmerDto,
  ): Promise<Farmer> {
    return this.farmerService.create(body);
  }

  @Get()
  findAll() {
    return process.env.JWT_SECRET;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.farmerService.findOne(id);
  }
}
