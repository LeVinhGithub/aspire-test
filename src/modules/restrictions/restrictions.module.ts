
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { provideCustomRepository } from 'src/utils/repository';
import { RestrictionService } from "./restrictions.service";
import { RestrictionController } from "./restrictions.controller";
import { RestrictionRepository } from "./restrictions.repository";
import { Restriction } from "entities/restrictions";

@Module({
  imports: [TypeOrmModule.forFeature([Restriction])],
  providers: [provideCustomRepository(Restriction, RestrictionRepository), RestrictionService],
  controllers: [RestrictionController],
})
export class RestrictionModule {}
