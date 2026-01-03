import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  // Delete,
} from '@nestjs/common';
import { AcreRecordService } from './acre-record.service';
import { CreateAcreRecordDto } from './dto/create-acre-record.dto';
import { UpdateAcreRecordDto } from './dto/update-acre-record.dto';

@Controller('acre-record')
export class AcreRecordController {
  constructor(private readonly acreRecordService: AcreRecordService) {}

  @Post()
  create(@Body() createAcreRecordDto: CreateAcreRecordDto) {
    return this.acreRecordService.create(createAcreRecordDto);
  }

  @Get()
  findAll() {
    return this.acreRecordService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.acreRecordService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAcreRecordDto: UpdateAcreRecordDto,
  ) {
    return this.acreRecordService.update(id, updateAcreRecordDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.acreRecordService.remove(+id);
  // }
}
