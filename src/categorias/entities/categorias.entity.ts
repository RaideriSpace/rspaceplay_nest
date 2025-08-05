import { IsNotEmpty } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Games } from '../../games/entities/games.entity';

@Entity({ name: 'tb_categorias' })
export class Categorias {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ type: 'text', nullable: false })
  descricao: string;

  @CreateDateColumn({ name: 'data_criacao' })
  dataCriacao: Date;

  @UpdateDateColumn({ name: 'ultima_atualizacao' })
  ultimaAtualizacao: Date;

  @OneToMany(() => Games, (games) => games.categoria)
  games: Games[];
}
