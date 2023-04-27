
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { provideCustomRepository } from 'src/utils/repository';
import { JobOpeningFavoriteService } from "./job-opening-favorites.service";
import { JobOpeningFavoriteController } from "./job-opening-favorites.controller";
import { JobOpeningFavoriteRepository } from "./job-opening-favorites.repository";
import { JobOpeningFavorite } from "entities/job_opening_favorites";

@Module({
  imports: [TypeOrmModule.forFeature([JobOpeningFavorite])],
  providers: [provideCustomRepository(JobOpeningFavorite, JobOpeningFavoriteRepository), JobOpeningFavoriteService],
  controllers: [JobOpeningFavoriteController],
})
export class JobOpeningFavoriteModule {}
