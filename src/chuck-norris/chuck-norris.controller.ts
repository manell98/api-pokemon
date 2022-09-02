import { Controller, Get } from '@nestjs/common';
import { ChuckNorrisService } from './chuck-norris.service';

@Controller('api/v1/chuck-norris')
export class ChuckNorrisController {
  constructor(private readonly chuckNorrisService: ChuckNorrisService) {}

  @Get()
  async listAll(): Promise<any> {
    return this.chuckNorrisService.listAll();
  }
}
