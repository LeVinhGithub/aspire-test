import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { Request } from 'express';

import { ConfigService } from '@nestjs/config';
import { Applicant } from 'entities/applicants';
import { CompanyUser } from 'entities/company_users';
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
        @InjectRepository(Applicant) private applicantsRepo: Repository<Applicant>,
        @InjectRepository(CompanyUser) private company_usersRepo: Repository<CompanyUser>,
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
              case "applicants":
          return this.validateApplicant(payload.userId)
              case "company_users":
          return this.validateCompanyUser(payload.userId)
            default:
        throw new BadRequestException(`scope ${payload.scope} is not supported.`);
    }
  }

    async validateApplicant(userId: number) {
    const user = await this.applicantsRepo.findOneBy({ id: userId });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
    async validateCompanyUser(userId: number) {
    const user = await this.company_usersRepo.findOneBy({ id: userId });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
  
}
