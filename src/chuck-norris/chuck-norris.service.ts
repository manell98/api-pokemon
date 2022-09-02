import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { Repository } from 'typeorm';
import { ChuckNorrisEntity } from './chuck-norris.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IOutputChuckNorris } from './interfaces/OutputChuckNorris';
import { environment } from '../config/environment';

@Injectable()
export class ChuckNorrisService {
  logger: Logger = new Logger(ChuckNorrisService.name);

  constructor(
    @InjectRepository(ChuckNorrisEntity)
    private readonly chuckNorrisRepository: Repository<ChuckNorrisEntity>,
  ) {}

  async listAll(): Promise<ChuckNorrisEntity> {
    this.logger.debug('Consumindo a API do Chuck Norris...');

    try {
      const endpoint = 'https://api.chucknorris.io/jokes/random';

      const result = await axios.get(endpoint);

      return this.saveDataInEntityChuckNorris(result.data);
    } catch (error) {
      this.logger.error(`
        ERRO no MS "${environment.app.name}", método "listAll".
        <'ERRO'>
          MESSAGE: Erro ao listar dados da API do chuck norris...
        Resposta:
        <'ERRO EXTERNO'>
          CODE: ${Number(error.code) || HttpStatus.INTERNAL_SERVER_ERROR}
          MESSAGE: ${error.message}.
      `);

      throw new HttpException(
        error.message,
        Number(error.code) || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async saveDataInEntityChuckNorris(
    data: IOutputChuckNorris,
  ): Promise<ChuckNorrisEntity> {
    this.logger.debug('Salvando dados na entidade ChuckNorris');

    try {
      return this.chuckNorrisRepository.save(
        this.chuckNorrisRepository.create({
          categorias: data.categories,
          iconeUrl: data.icon_url,
          idApiChuckNorris: data.id,
          url: data.url,
          valor: data.value,
        }),
      );
    } catch (error) {
      this.logger.error(`
        ERRO no MS "${
          environment.app.name
        }", método "saveDataInEntityChuckNorris".
        <'ERRO'>
          MESSAGE: Erro ao salvar dados na entidade do chuck norris...
        Parâmetros da requisição:
          BODY: ${JSON.stringify(data)}
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
}
