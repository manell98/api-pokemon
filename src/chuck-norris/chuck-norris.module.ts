import { Module } from '@nestjs/common';
import { ChuckNorrisController } from './chuck-norris.controller';
import { ChuckNorrisService } from './chuck-norris.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChuckNorrisEntity } from './chuck-norris.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChuckNorrisEntity])],
  controllers: [ChuckNorrisController],
  providers: [ChuckNorrisService],
})
export class ChuckNorrisModule {}
