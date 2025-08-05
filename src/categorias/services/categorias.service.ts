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
    return await this.categoriaRepository.find();
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
    return await this.categoriaRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
      relations: {
        games: true,
      },
    });
  }

  async create(categoria: Categorias): Promise<Categorias> {
    return await this.categoriaRepository.save(categoria);
  }

  async update(categoria: Categorias): Promise<Categorias> {
    await this.findById(categoria.id);

    return await this.categoriaRepository.save(categoria);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.categoriaRepository.delete(id);
  }
}
