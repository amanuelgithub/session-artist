import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { EntityManager } from 'typeorm';

@Injectable()
export class CommonUserService {
  public async isEmailTaken(
    em: EntityManager,
    email: string,
    userId?: number,
  ): Promise<boolean | undefined> {
    const where: any = { email };
    if (userId) where['id'] = userId;
    return (await em.count(UserEntity, { where: { email } })) > 0;
  }
  // public async isUsernameTaken(
  //   em: EntityManager,
  //   username: string,
  //   userId?: number,
  // ): Promise<boolean | undefined> {
  //   const where: any = { username };
  //   if (userId) where['id'] = userId;
  //   return (await em.count(UserEntity, { where: { username } })) > 0;
  // }
  // public async isPhoneNumberTaken(
  //   em: EntityManager,
  //   phoneNumber: string,
  //   userId?: number,
  // ): Promise<boolean | undefined> {
  //   const where: any = { phoneNumber };
  //   if (userId) where['id'] = userId;
  //   return (await em.count(UserEntity, { where: { phone: phoneNumber } })) > 0;
  // }
}
