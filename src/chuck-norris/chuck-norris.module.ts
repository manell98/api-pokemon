import { Module } from '@nestjs/common';
import { ChuckNorrisController } from './chuck-norris.controller';
import { ChuckNorrisService } from './chuck-norris.service';

@Module({
  controllers: [ChuckNorrisController],
  providers: [ChuckNorrisService],
})
export class ChuckNorrisModule {}
