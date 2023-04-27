
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { provideCustomRepository } from 'src/utils/repository';
import { CareerDirectionGroupService } from "./career-direction-groups.service";
import { CareerDirectionGroupController } from "./career-direction-groups.controller";
import { CareerDirectionGroupRepository } from "./career-direction-groups.repository";
import { CareerDirectionGroup } from "entities/career_direction_groups";

@Module({
  imports: [TypeOrmModule.forFeature([CareerDirectionGroup])],
  providers: [provideCustomRepository(CareerDirectionGroup, CareerDirectionGroupRepository), CareerDirectionGroupService],
  controllers: [CareerDirectionGroupController],
})
export class CareerDirectionGroupModule {}
