import { Test, TestingModule } from '@nestjs/testing';
import { SerieController } from './serie.controller';

describe('SerieController', () => {
  let controller: SerieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SerieController],
    }).compile();

    controller = module.get<SerieController>(SerieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
