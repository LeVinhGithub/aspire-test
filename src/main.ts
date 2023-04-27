import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import {
  i18nValidationErrorFactory,
  I18nValidationExceptionFilter, I18nService } from 'nestjs-i18n';
import helmet from 'helmet';
import { ConfigService } from '@nestjs/config';
import { useContainer } from 'class-validator';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { setupSwagger } from './utils/swagger';
import { formatErrors } from './i18n/format';
import { AllExceptionFilter } from './filters/all-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.useStaticAssets(join(__dirname, 'uploads'), { prefix: '/uploads' });

  const configService = app.get(ConfigService);

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: i18nValidationErrorFactory,
      whitelist: true,
    })
  )
  const i18nService = app.get(I18nService);
  app.useGlobalFilters(new AllExceptionFilter(configService, i18nService));

  app.useGlobalFilters(new I18nValidationExceptionFilter({ errorFormatter: formatErrors }))
  app.use(helmet());

  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  await setupSwagger(app);
  await app.listen(configService.get('app.port', 3000));
}
bootstrap();
