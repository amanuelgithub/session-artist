import { UserEntity } from '@apps/api/database/entities';
import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';

@Injectable()
export class CommonUserService {
  public async isEmailTaken(
    em: EntityManager,
    email: string,
    userId?: number,
  ): Promise<boolean | undefined> {
    const where: { email: string; id?: number } = { email };
    if (userId) where['id'] = userId;
    return (await em.count(UserEntity, { where: { email } })) > 0;
  }
  public async isUsernameTaken(
    em: EntityManager,
    username: string,
    userId?: number,
  ): Promise<boolean | undefined> {
    const where: { username: string; id?: number } = { username };
    if (userId) where['id'] = userId;
    return (await em.count(UserEntity, { where: { username } })) > 0;
  }
  public async isPhoneNumberTaken(
    em: EntityManager,
    phoneNumber: string,
    userId?: number,
  ): Promise<boolean | undefined> {
    const where: { phoneNumber: string; id?: number } = { phoneNumber };
    if (userId) where['id'] = userId;
    return (await em.count(UserEntity, { where: { phone: phoneNumber } })) > 0;
  }
}
