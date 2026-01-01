import { Module } from '@nestjs/common';

import { LinksModule } from './links/links.module';
import { ConfigModule } from '@nestjs/config';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { FarmerModule } from './farmer/farmer.module';

@Module({
  imports: [LinksModule, ConfigModule.forRoot(), FarmerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
