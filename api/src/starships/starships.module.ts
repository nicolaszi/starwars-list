import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'
import { TypeOrmModule } from '@nestjs/typeorm';

import { StarshipsController } from './starships.controller';
import { StarshipsService } from './starships.service';
import { SwapiService } from '../services/swapi/swapi.service';
import { Starship } from './starship.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Starship]),
    HttpModule
  ],
  controllers: [StarshipsController],
  providers: [StarshipsService, SwapiService]
})
export class StarshipsModule {}
