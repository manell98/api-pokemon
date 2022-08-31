import { Module } from '@nestjs/common';
import { SerieService } from './serie.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SerieEntity } from './serie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SerieEntity])],
  providers: [SerieService],
})
export class SerieModule {}
