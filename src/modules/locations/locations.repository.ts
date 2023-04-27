
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/base.repository';
import { Location } from 'entities/locations';

@Injectable()
export class LocationRepository extends BaseRepository<Location> {}
