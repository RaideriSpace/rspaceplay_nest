import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Games } from './entities/games.entity';
import { GamesService } from './services/games.service';
import { GamesController } from './controllers/games.controller';
import { CategoriasModule } from '../categorias/categorias.module';

@Module({
  imports: [TypeOrmModule.forFeature([Games]), CategoriasModule],
  controllers: [GamesController],
  providers: [GamesService],
  exports: [TypeOrmModule],
})
export class GamesModule {}
