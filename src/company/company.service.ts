import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import {CompanyEntity} from "./entities/company.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {AddressEntity} from "../address/entities/address.entity";
import {CreateAddressDto} from "../address/dto/create-address.dto";

@Injectable()
export class CompanyService {
  constructor(
      @InjectRepository(CompanyEntity)
      private readonly companyEntityRepository: Repository<CompanyEntity>,

      @InjectRepository(AddressEntity)
      private readonly adressEntityRepository: Repository<AddressEntity>,
  ) {}

  async create(createCompanyDto: CreateCompanyDto): Promise<CompanyEntity> {
    const createdCompany = await this.companyEntityRepository.save(
        this.companyEntityRepository.create(createCompanyDto),
    );

    await Promise.all(
        createCompanyDto.adress.map(async (createAddressDto: CreateAddressDto) => {
          const addressEntity = new AddressEntity();

          addressEntity.cep = createAddressDto.cep;
          addressEntity.logradouro = createAddressDto.logradouro;
          addressEntity.bairro = createAddressDto.bairro;
          addressEntity.cidade = createAddressDto.cidade;
          addressEntity.complemento = createAddressDto.complemento;
          addressEntity.uf = createAddressDto.uf;
          addressEntity.company = createdCompany;

          await this.adressEntityRepository.save(
              this.adressEntityRepository.create(addressEntity)
          )
        }),
    )

    return createdCompany;
  }
}
