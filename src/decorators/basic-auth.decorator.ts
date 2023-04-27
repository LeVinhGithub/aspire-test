import { BasicAuthGuard } from 'guards/basic-auth.guard';
import { applyDecorators, UseGuards } from '@nestjs/common';

export function BasicAuth(): MethodDecorator {
  return applyDecorators(UseGuards(BasicAuthGuard));
}
