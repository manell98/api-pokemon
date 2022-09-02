import { Controller, Get } from '@nestjs/common';
import { ChuckNorrisService } from './chuck-norris.service';
import { ChuckNorrisEntity } from './chuck-norris.entity';

@Controller('/chuck-norris')
export class ChuckNorrisController {
  constructor(private readonly chuckNorrisService: ChuckNorrisService) {}

  @Get()
  async listAll(): Promise<ChuckNorrisEntity> {
    return this.chuckNorrisService.listAll();
  }
}
