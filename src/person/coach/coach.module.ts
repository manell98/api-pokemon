import { Module } from '@nestjs/common';
import { CoachService } from './coach.service';
import { CoachController } from './coach.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoachEntity } from './entities/coach.entity';
import { PokemonEntity } from '../../pokemon/entities/pokemon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CoachEntity, PokemonEntity])],
  controllers: [CoachController],
  providers: [CoachService],
})
export class CoachModule {}
