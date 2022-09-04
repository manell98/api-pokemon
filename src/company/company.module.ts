import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyEntity } from './entities/company.entity';
import { AddressEntity } from '../address/entities/address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyEntity, AddressEntity])],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}
