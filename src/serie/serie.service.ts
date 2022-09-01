import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SerieEntity } from './serie.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ISerieInterface } from './interfaces/serie.interface';

@Injectable()
export class SerieService {
  constructor(
    @InjectRepository(SerieEntity)
    private readonly serieRepository: Repository<SerieEntity>,
  ) {}

  async save(serie: ISerieInterface): Promise<SerieEntity> {
    return this.serieRepository.save(this.serieRepository.create(serie));
  }

  async findAll(): Promise<Array<SerieEntity>> {
    return this.serieRepository.find();
  }
}
