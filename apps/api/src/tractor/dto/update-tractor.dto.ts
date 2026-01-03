import { PartialType } from '@nestjs/swagger';
import { CreateTractorDto } from './create-tractor.dto';

export class UpdateTractorDto extends PartialType(CreateTractorDto) {}
