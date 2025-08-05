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
import { CategoriasService } from '../services/categorias.service';
import { Categorias } from '../entities/categorias.entity';

@Controller('/categorias')
export class CategoriasController {
  constructor(private readonly categoriaService: CategoriasService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Categorias[]> {
    return this.categoriaService.findAll();
  }

  @Get('/:nome')
  @HttpCode(HttpStatus.OK)
  findAllByNome(@Param('nome') nome: string): Promise<Categorias[]> {
    return this.categoriaService.findAllByNome(nome);
  }

  @Get('/id/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Categorias> {
    return this.categoriaService.findById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(
    @Body() categoria: Categorias,
  ): Promise<{ message: string; categoria: Categorias }> {
    return this.categoriaService.create(categoria);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(
    @Body() categoria: Categorias,
  ): Promise<{ message: string; categoria: Categorias }> {
    return this.categoriaService.update(categoria);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  delete(@Param('id', ParseIntPipe) id: number): Promise<{ message: string }> {
    return this.categoriaService.delete(id);
  }
}
