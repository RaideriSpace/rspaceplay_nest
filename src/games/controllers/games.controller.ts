import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { GamesService } from '../services/games.service';
import { Games } from '../entities/games.entity';

@Controller('/games')
export class GamesController {
  constructor(private readonly gameService: GamesService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Games[]> {
    return this.gameService.findAll();
  }

  @Get('/destaques')
  @HttpCode(HttpStatus.OK)
  findAllDestaque(): Promise<Games[]> {
    return this.gameService.findAllDestaque();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Games> {
    return this.gameService.findById(id);
  }

  @Get('/titulo/:titulo')
  @HttpCode(HttpStatus.OK)
  findAllByTitulo(@Param('titulo') titulo: string): Promise<Games[]> {
    return this.gameService.findAllByTitulo(titulo);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() game: Games): Promise<{ message: string; game: Games }> {
    return this.gameService.create(game);
  }

  @Put()
  @HttpCode(HttpStatus.CREATED)
  update(@Body() game: Games): Promise<{ message: string; game: Games }> {
    return this.gameService.update(game);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  delete(@Param('id', ParseIntPipe) id: number): Promise<{ message: string }> {
    return this.gameService.delete(id);
  }
}
