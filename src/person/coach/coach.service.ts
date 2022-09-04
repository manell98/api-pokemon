import { Injectable } from '@nestjs/common';
import { CreateCoachDto } from './dto/create-coach.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CoachEntity } from './entities/coach.entity';
import { AddressEntity } from '../../address/entities/address.entity';
import { CreateAddressDto } from '../../address/dto/create-address.dto';

@Injectable()
export class CoachService {
  constructor(
    @InjectRepository(CoachEntity)
    private readonly coachEntityRepository: Repository<CoachEntity>,

    @InjectRepository(AddressEntity)
    private readonly addressEntityRepository: Repository<AddressEntity>,
  ) {}

  async create(createCoachDto: CreateCoachDto): Promise<CoachEntity> {
    const coach = await this.coachEntityRepository.save(
      this.coachEntityRepository.create(createCoachDto),
    );

    await Promise.all(
      createCoachDto.endereco.map(
        async (createAddressDto: CreateAddressDto) => {
          const addressEntity: AddressEntity = new AddressEntity();

          addressEntity.cep = createAddressDto.cep;
          addressEntity.logradouro = createAddressDto.logradouro;
          addressEntity.complemento = createAddressDto.complemento;
          addressEntity.bairro = createAddressDto.bairro;
          addressEntity.cidade = createAddressDto.cidade;
          addressEntity.uf = createAddressDto.uf;
          addressEntity.coach = coach;

          await this.addressEntityRepository.save(
            this.addressEntityRepository.create(addressEntity),
          );
        },
      ),
    );

    return coach;
  }
}
