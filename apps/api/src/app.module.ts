import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { FarmerModule } from './farmer/farmer.module';
import { LinksModule } from './links/links.module';
import { WorkTypeModule } from './work-type/work-type.module';
import { TractorModule } from './tractor/tractor.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    LinksModule,
    PrismaModule,
    FarmerModule,
    WorkTypeModule,
    TractorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
