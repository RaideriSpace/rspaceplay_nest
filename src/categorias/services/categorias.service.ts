import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categorias } from '../entities/categorias.entity';
import { ILike, Repository } from 'typeorm';
import { DeleteResult } from 'typeorm/browser';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categorias)
    private categoriaRepository: Repository<Categorias>,
  ) {}

  async findAll(): Promise<Categorias[]> {
    try {
      return await this.categoriaRepository.find();
    } catch (error) {
      throw new HttpException(
        'Erro ao buscar categorias.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findById(id: number): Promise<Categorias> {
    const categoria = await this.categoriaRepository.findOne({
      where: {
        id,
      },
      relations: {
        games: true,
      },
    });

    if (!categoria)
      throw new HttpException(
        'Categoria não encontrada!',
        HttpStatus.NOT_FOUND,
      );

    return categoria;
  }

  async findAllByNome(nome: string): Promise<Categorias[]> {
    const categoriesList = await this.categoriaRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
      relations: {
        games: true,
      },
    });

    if (categoriesList.length === 0) {
      throw new HttpException(
        'Nenhuma categoria encontrada com esse nome!',
        HttpStatus.NOT_FOUND,
      );
    }

    return categoriesList;
  }

  async create(
    categoria: Categorias,
  ): Promise<{ message: string; categoria: Categorias }> {
    try {
      const createdCategory = await this.categoriaRepository.save(categoria);
      return {
        message: 'Categoria criada com sucesso!',
        categoria: createdCategory,
      };
    } catch (error) {
      throw new HttpException(
        'Erro ao criar categoria! Verifique os dados enviados.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(
    categoria: Categorias,
  ): Promise<{ message: string; categoria: Categorias }> {
    await this.findById(categoria.id);

    try {
      const updatedCategory = await this.categoriaRepository.save(categoria);
      return {
        message: 'Categoria atualizada com sucesso!',
        categoria: updatedCategory,
      };
    } catch (error) {
      throw new HttpException(
        'Erro ao atualizar a categoria! Verifique os dados enviados.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async delete(id: number): Promise<{ message: string }> {
    await this.findById(id);
    try {
      await this.categoriaRepository.delete(id);

      return {
        message: `Categoria com id ${id} deletada com sucesso.`,
      };
    } catch (error) {
      throw new HttpException(
        'Erro ao deletar categoria.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
