import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Games } from '../entities/games.entity';
import { ILike, Repository, DeleteResult } from 'typeorm';
import { CategoriasService } from '../../categorias/services/categorias.service';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Games)
    private gamesRepository: Repository<Games>,
    private categoriaService: CategoriasService,
  ) {}

  async findAll(): Promise<Games[]> {
    try {
      return await this.gamesRepository.find({
        relations: {
          categoria: true,
        },
      });
    } catch (error) {
      throw new HttpException(
        'Erro ao buscar jogos',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findById(id: number): Promise<Games> {
    const games = await this.gamesRepository.findOne({
      where: {
        id,
      },
      relations: {
        categoria: true,
      },
    });

    if (!games)
      throw new HttpException('Jogo não encontrado', HttpStatus.NOT_FOUND);

    return games;
  }

  async findAllByTitulo(titulo: string): Promise<Games[]> {
    const gamesList = await this.gamesRepository.find({
      where: {
        titulo: ILike(`%${titulo}%`),
      },
      relations: {
        categoria: true,
      },
    });

    if (gamesList.length === 0) {
      throw new HttpException(
        'Nenhum jogo encontrado com esse título!',
        HttpStatus.NOT_FOUND,
      );
    }

    return gamesList;
  }

  async findAllDestaque(): Promise<Games[]> {
      const destaqueList =  await this.gamesRepository.find({
        where: { destaque: true },
        relations: {
          categoria: true,
        },
      });

    if (destaqueList.length === 0) {
      throw new HttpException(
        'Nenhum jogo está em destaque!',
        HttpStatus.NOT_FOUND,
      );
    }

    return destaqueList;
  }

  async create(game: Games): Promise<{ message: string; game: Games }> {
    try {
      await this.categoriaService.findById(game.categoria.id);
      const createdGame = await this.gamesRepository.save(game);
      return {
        message: 'Jogo criado com sucesso!',
        game: createdGame,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Erro ao criar o jogo! Verifique os dados enviados.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(game: Games): Promise<{ message: string; game: Games }> {
    await this.findById(game.id);

    try {
      await this.categoriaService.findById(game.categoria.id);
      const updatedGame = await this.gamesRepository.save(game);
      return {
        message: 'Jogo atualizado com sucesso!',
        game: updatedGame,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Erro ao atualizar o jogo! Verifique os dados enviados.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async delete(id: number): Promise<{ message: string }> {
    await this.findById(id);
    try {
      await this.gamesRepository.delete(id);

      return {
        message: `Jogo com id ${id} deletada com sucesso.`,
      };
    } catch (error) {
      throw new HttpException(
        'Erro ao deletar jogo',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
