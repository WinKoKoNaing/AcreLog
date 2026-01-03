import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TractorService } from './tractor.service';
import { CreateTractorDto } from './dto/create-tractor.dto';
import { UpdateTractorDto } from './dto/update-tractor.dto';

@Controller('tractors')
export class TractorController {
  constructor(private readonly tractorService: TractorService) {}

  @Post()
  create(@Body() createTractorDto: CreateTractorDto) {
    return this.tractorService.create(createTractorDto);
  }

  @Get()
  findAll() {
    return this.tractorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tractorService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTractorDto: UpdateTractorDto) {
    return this.tractorService.update(id, updateTractorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tractorService.remove(id);
  }
}
