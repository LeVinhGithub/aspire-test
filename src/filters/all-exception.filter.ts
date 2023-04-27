import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { I18nService } from "nestjs-i18n";
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { RollbarLogger } from 'nestjs-rollbar';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  constructor(
    private readonly configService: ConfigService,
    private readonly i18nService: I18nService
  ) {}

  catch(exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const authenticateHeader = response.getHeader('WWW-Authenticate');
    if (authenticateHeader) {
      return;
    }
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    if (exception && exception.getStatus) {
      status = exception.getStatus();
    }

    const message = exception?.response?.message
      || exception.message
      || this.i18nService.translate(`controller.common.${status}`);
    if (process.env.NODE_ENV !== 'development' && status >= 500) {
      const rollbarLogger = new RollbarLogger({
        accessToken: this.configService.get('rollbar.accessToken'),
        environment: this.configService.get('app.nodeEnv'),
      });
      rollbarLogger.error(exception);
    }

    response.status(status).json({
      message,
      timestamp: new Date().toISOString(),
    });
  }
}
