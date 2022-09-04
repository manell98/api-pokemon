import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonEntity } from './entities/person.entity';
import { AddressEntity } from '../address/entities/address.entity';
import { CoachModule } from './coach/coach.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PersonEntity, AddressEntity]),
    CoachModule,
  ],
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonModule {}
