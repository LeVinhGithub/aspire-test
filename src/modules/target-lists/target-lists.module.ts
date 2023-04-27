
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { provideCustomRepository } from 'src/utils/repository';
import { TargetListService } from "./target-lists.service";
import { TargetListController } from "./target-lists.controller";
import { TargetListRepository } from "./target-lists.repository";
import { TargetList } from "entities/target_lists";

@Module({
  imports: [TypeOrmModule.forFeature([TargetList])],
  providers: [provideCustomRepository(TargetList, TargetListRepository), TargetListService],
  controllers: [TargetListController],
})
export class TargetListModule {}
