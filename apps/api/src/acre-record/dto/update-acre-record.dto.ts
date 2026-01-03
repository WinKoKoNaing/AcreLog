import { IsOptional, IsNumber } from 'class-validator';

export class UpdateAcreRecordDto {
  @IsOptional()
  @IsNumber()
  acres?: number;

  @IsOptional()
  @IsNumber()
  ratePerAcre?: number;
}
