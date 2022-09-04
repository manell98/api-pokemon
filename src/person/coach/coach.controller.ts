import { Controller, Post, Body } from '@nestjs/common';
import { CoachService } from './coach.service';
import { CreateCoachDto } from './dto/create-coach.dto';
import { CoachEntity } from './entities/coach.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ErrorDTO } from '../../pokemon/dto/error.dto';

@Controller('coach')
@ApiTags('Treinador')
export class CoachController {
  constructor(private readonly coachService: CoachService) {}

  @ApiOperation({
    summary: 'Criar um treinar e salva na Base de dados.',
  })
  @ApiResponse({
    status: 201,
    description: 'Treinador salvo com sucesso!!',
  })
  @ApiResponse({
    status: 500,
    description: 'Erro ao salvar o treinador na Base de Dados',
    type: ErrorDTO,
  })
  @Post()
  async create(@Body() createCoachDto: CreateCoachDto): Promise<CoachEntity> {
    return this.coachService.create(createCoachDto);
  }
}
