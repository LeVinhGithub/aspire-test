
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { provideCustomRepository } from 'src/utils/repository';
import { IndustryGroupService } from "./industry-groups.service";
import { IndustryGroupController } from "./industry-groups.controller";
import { IndustryGroupRepository } from "./industry-groups.repository";
import { IndustryGroup } from "entities/industry_groups";

@Module({
  imports: [TypeOrmModule.forFeature([IndustryGroup])],
  providers: [provideCustomRepository(IndustryGroup, IndustryGroupRepository), IndustryGroupService],
  controllers: [IndustryGroupController],
})
export class IndustryGroupModule {}
