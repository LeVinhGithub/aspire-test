
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/base.repository';
import { JobOpeningFavorite } from 'entities/job_opening_favorites';

@Injectable()
export class JobOpeningFavoriteRepository extends BaseRepository<JobOpeningFavorite> {}
