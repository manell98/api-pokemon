import { Module } from '@nestjs/common';
import { SerieService } from './serie.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SerieEntity } from './entities/serie.entity';
import { SerieController } from './serie.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SerieEntity])],
  providers: [SerieService],
  controllers: [SerieController],
})
export class SerieModule {}
