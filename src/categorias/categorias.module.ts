import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Categorias } from "./entities/categorias.entity";
import { CategoriasService } from "./services/categorias.service";
import { CategoriasController } from "./controllers/categorias.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Categorias])],
  controllers: [CategoriasController],
  providers: [CategoriasService],
  exports: [CategoriasService],
})
export class CategoriasModule {}