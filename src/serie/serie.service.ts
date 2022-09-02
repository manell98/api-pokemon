import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SerieEntity } from './serie.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ISerieInterface } from './interfaces/serie.interface';
import { environment } from '../config/environment';

@Injectable()
export class SerieService {
  logger: Logger = new Logger(SerieService.name);

  constructor(
    @InjectRepository(SerieEntity)
    private readonly serieRepository: Repository<SerieEntity>,
  ) {}

  async save(serie: ISerieInterface): Promise<SerieEntity> {
    this.logger.debug(`Cadastrando nova série...`);

    try {
      return this.serieRepository.save(this.serieRepository.create(serie));
    } catch (error) {
      this.logger.error(`
        ERRO no MS "${environment.app.name}", método "save".
        <'ERRO'>
          MESSAGE: Erro ao cadastrar nova série...
        Parâmetros da requisição:
          BODY: ${JSON.stringify(serie)}
        Resposta:
        <'ERRO SQL'>
          CODE: ${Number(error.code) || HttpStatus.INTERNAL_SERVER_ERROR}
          MESSAGE: ${error.message}.
      `);

      throw new HttpException(
        error.message,
        Number(error.code) || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll(): Promise<Array<SerieEntity>> {
    this.logger.debug('Buscando todas as séries...');

    try {
      return this.serieRepository.find();
    } catch (error) {
      this.logger.error(`
        ERRO no MS "${environment.app.name}", método "findAll".
        <'ERRO'>
          MESSAGE: Erro ao retornar todas as séries...
        Resposta:
        <'ERRO SQL'>
          CODE: ${Number(error.code) || HttpStatus.INTERNAL_SERVER_ERROR}
          MESSAGE: ${error.message}.
      `);

      throw new HttpException(
        error.message,
        Number(error.code) || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findById(id: string): Promise<SerieEntity> {
    this.logger.debug(`Buscando a série de id: ${id}...`);

    try {
      const serie = await this.serieRepository.findOne({
        where: {
          id: id,
        },
      });

      if (!serie) {
        throw new HttpException(
          `Série de id: ${id} nao encontrada...`,
          HttpStatus.UNPROCESSABLE_ENTITY,
        );
      }

      return serie;
    } catch (error) {
      this.logger.error(`
        ERRO no MS "${environment.app.name}", método "findById".
        <'ERRO'>
          MESSAGE: Erro ao retornar série de id "${id}"...
        Parâmetros da requisição:
          ID SERIE: ${id}
        Resposta:
        <'ERRO ${
          error.status === HttpStatus.UNPROCESSABLE_ENTITY ? 'NEGOCIAL' : 'SQL'
        }'>
          CODE: ${error.status || HttpStatus.INTERNAL_SERVER_ERROR}
          MESSAGE: ${error.message}.
      `);

      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
