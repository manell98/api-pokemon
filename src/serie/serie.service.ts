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

  async findById(id: string): Promise<SerieEntity> {
    const serie = await this.serieRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!serie) {
      throw new Error(`Serie de id: ${id} nao encontrado!`);
    }

    return serie;
  }
}
