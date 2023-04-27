import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { Request } from 'express';

import { ConfigService } from '@nestjs/config';
import { Testing } from 'entities/testings';
import { AccessToken } from 'entities/access_tokens';

import { JwtDto } from 'features/auth/dtos/jwt.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AUTH_STRATEGY } from 'src/constants';

@Injectable()
export default class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  AUTH_STRATEGY.REFRESH_TOKEN,
) {
  constructor(
    readonly configService: ConfigService,
        @InjectRepository(Testing) private testingsRepo: Repository<Testing>,
        @InjectRepository(AccessToken)
    private accessTokenRepo: Repository<AccessToken>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromBodyField('refreshToken'),
      ignoreExpiration: false,
      secretOrKey: configService.get('jwt.refreshSecret'),
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: JwtDto) {
    const token = req.get('Authorization').replace('Bearer', '').trim();
    if (
      !(await this.accessTokenRepo.findOneBy({
        refresh_token: token
      }))
    ){
      throw new UnauthorizedException();
    }

    switch(payload.resourceOwner) {
              case "testings":
          return this.validateTesting(payload.userId)
            default:
        throw new BadRequestException(`scope ${payload.scope} is not supported.`);
    }
  }

    async validateTesting(userId: number) {
    const user = await this.testingsRepo.findOneBy({ id: userId });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
  
}
