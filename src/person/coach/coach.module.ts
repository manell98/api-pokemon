import { Module } from '@nestjs/common';
import { CoachService } from './coach.service';
import { CoachController } from './coach.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoachEntity } from './entities/coach.entity';
import { AddressEntity } from '../../address/entities/address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CoachEntity, AddressEntity])],
  controllers: [CoachController],
  providers: [CoachService],
})
export class CoachModule {}
