import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Categorias } from '../../categorias/entities/categorias.entity';

@Entity({ name: 'tb_games' })
export class Games {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  titulo: string;

  @IsNotEmpty()
  @Column({ type: 'float', nullable: false })
  preco: number;

  @Column({ type: 'enum', enum: ['Digital', 'Físico'], default: 'Digital' })
  midia: string;

  @IsNotEmpty()
  @Column({ length: 5, nullable: false })
  classificacao: string;

  @IsNotEmpty()
  @Column({ type: 'text', nullable: false })
  descricao: string;

  @Column({ nullable: true, default: 0 })
  estoque: number;

  @IsNotEmpty()
  @Column({ type: 'date', nullable: false })
  dataLancamento: Date;

  @Column({ type: 'boolean', default: false })
  destaque: boolean;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  desenvolvedora: string;

  @ManyToOne(() => Categorias, (categoria) => categoria.games, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'categoria_id' })
  categoria: Categorias;
}
