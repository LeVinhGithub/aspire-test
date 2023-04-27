
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { provideCustomRepository } from 'src/utils/repository';
import { LanguageService } from "./languages.service";
import { LanguageController } from "./languages.controller";
import { LanguageRepository } from "./languages.repository";
import { Language } from "entities/languages";

@Module({
  imports: [TypeOrmModule.forFeature([Language])],
  providers: [provideCustomRepository(Language, LanguageRepository), LanguageService],
  controllers: [LanguageController],
})
export class LanguageModule {}
