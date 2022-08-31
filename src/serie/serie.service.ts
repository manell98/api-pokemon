import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SerieEntity } from './serie.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SerieService {
  constructor(
    @InjectRepository(SerieEntity)
    private readonly serieRepository: Repository<SerieEntity>,
  ) {}
}
