import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PersonEntity } from './entities/person.entity';
import { AddressEntity } from './address/entities/address.entity';
import { CreateAddressDto } from './address/dto/create-address.dto';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(PersonEntity)
    private readonly personEntityRepository: Repository<PersonEntity>,

    @InjectRepository(AddressEntity)
    private readonly addressEntityRepository: Repository<AddressEntity>,
  ) {}

  async create(createPersonDto: CreatePersonDto) {
    const person = await this.personEntityRepository.save(
      this.personEntityRepository.create(createPersonDto),
    );

    await Promise.all(
      createPersonDto.endereco.map(
        async (createAddressDto: CreateAddressDto) => {
          const address: AddressEntity = new AddressEntity();

          address.cep = createAddressDto.cep;
          address.logradouro = createAddressDto.logradouro;
          address.complemento = createAddressDto.complemento;
          address.bairro = createAddressDto.bairro;
          address.cidade = createAddressDto.cidade;
          address.uf = createAddressDto.uf;
          address.person = person;

          await this.addressEntityRepository.save(
            this.addressEntityRepository.create(address),
          );
        },
      ),
    );

    return person;
  }

  findAll() {
    return `This action returns all people`;
  }

  findOne(id: number) {
    return `This action returns a #${id} person`;
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
