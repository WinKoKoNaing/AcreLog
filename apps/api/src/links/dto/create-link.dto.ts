import { IsString } from 'class-validator';

export class CreateLinkDto {
  @IsString()
  title: string;
  url: string;
  description: string;
}
