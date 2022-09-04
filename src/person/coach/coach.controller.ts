import { Controller, Post, Body } from '@nestjs/common';
import { CoachService } from './coach.service';
import { CreateCoachDto } from './dto/create-coach.dto';

@Controller('coach')
export class CoachController {
  constructor(private readonly coachService: CoachService) {}

  @Post()
  async create(@Body() createCoachDto: CreateCoachDto) {
    return this.coachService.create(createCoachDto);
  }
}
