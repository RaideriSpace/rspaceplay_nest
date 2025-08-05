import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Games } from './games/entities/games.entity';
import { GamesModule } from './games/games.module';
import { Categorias } from './categorias/entities/categorias.entity';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_gamestore',
      entities: [Games, Categorias],
      synchronize: true,
      logging: true,
    }),
    GamesModule,
    CategoriasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
