import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonEntity } from './entities/person.entity';
import { AddressEntity } from '../address/entities/address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonEntity, AddressEntity])],
  controllers: [PeopleController],
  providers: [PeopleService],
})
export class PeopleModule {}
