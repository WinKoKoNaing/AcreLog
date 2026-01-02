import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { FarmerModule } from './farmer/farmer.module';
import { LinksModule } from './links/links.module';

@Module({
  imports: [ConfigModule.forRoot(), LinksModule, FarmerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
