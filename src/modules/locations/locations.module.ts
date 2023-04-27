
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { provideCustomRepository } from 'src/utils/repository';
import { LocationService } from "./locations.service";
import { LocationController } from "./locations.controller";
import { LocationRepository } from "./locations.repository";
import { Location } from "entities/locations";

@Module({
  imports: [TypeOrmModule.forFeature([Location])],
  providers: [provideCustomRepository(Location, LocationRepository), LocationService],
  controllers: [LocationController],
})
export class LocationModule {}
