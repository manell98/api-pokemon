import { Controller, Post, Body } from '@nestjs/common';
import { CoachService } from './coach.service';
import { CreateCoachDto } from './dto/create-coach.dto';
import { CoachEntity } from './entities/coach.entity';

@Controller('coach')
export class CoachController {
  constructor(private readonly coachService: CoachService) {}

  @Post()
  async create(@Body() createCoachDto: CreateCoachDto): Promise<CoachEntity> {
    return this.coachService.create(createCoachDto);
  }
}
