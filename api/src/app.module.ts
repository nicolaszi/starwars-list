import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { StarshipsModule } from './starships/starships.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    StarshipsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
