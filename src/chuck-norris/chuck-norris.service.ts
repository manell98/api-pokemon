import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { IOutputChuckNorris } from './interfaces/OutputChuckNorris';

@Injectable()
export class ChuckNorrisService {
  logger: Logger = new Logger(ChuckNorrisService.name);

  async listAll(): Promise<any> {
    this.logger.debug('Consumindo a API do Chuck Norris...');

    const endpoint = 'https://api.chucknorris.io/jokes/random';

    const result = await axios.get(endpoint);

    const outputChuckNorris: IOutputChuckNorris = result.data;

    return outputChuckNorris;
  }
}
