import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Games } from '../entities/games.entity';
import { ILike, Repository } from 'typeorm';
import { DeleteResult } from 'typeorm/browser';
import { CategoriasService } from '../../categorias/services/categorias.service';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Games)
    private gamesRepository: Repository<Games>,
    private categoriaService: CategoriasService,
  ) {}

  async findAll(): Promise<Games[]> {
    return await this.gamesRepository.find({
      relations: {
        categoria: true,
      },
    });
  }

  async findById(id: number): Promise<Games> {
    const games = await this.gamesRepository.findOne({
      where: {
        id,
      },
      relations: {
        categoria: true,
      }
    });

    if (!games)
      throw new HttpException('Jogo não encontrado', HttpStatus.NOT_FOUND);

    return games;
  }

  async findAllByTitulo(titulo: string): Promise<Games[]> {
    return await this.gamesRepository.find({
      where: {
        titulo: ILike(`%${titulo}%`),
      },
      relations: {
        categoria: true,
      }
    });
  }

  async findAllDestaque(): Promise<Games[]> {
    return await this.gamesRepository.find({
      where: { destaque: true },
      relations: {
        categoria: true,
      }
    });
  }

  async create(game: Games): Promise<Games> {

    try {
      await this.categoriaService.findById(game.categoria.id);
      return await this.gamesRepository.save(game);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException("Erro Inesperado ao criar o jogo! Algum valor esta incorreto.", HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async update(game: Games): Promise<Games> {
    const game_id = await this.findById(game.id);
    if (!game_id)
      throw new HttpException('Jogo não encontrado', HttpStatus.NOT_FOUND);

    try {
        await this.categoriaService.findById(
        game.categoria.id,
      );
      return await this.gamesRepository.save(game);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Erro Inesperado ao criar o jogo! Algum valor esta incorreto.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.gamesRepository.delete(id);
  }
}
