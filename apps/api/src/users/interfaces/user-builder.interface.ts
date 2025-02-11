// import { UserEntity } from '@apps/api/';
import { UserEntity } from '@apps/api/database/entities';
import { EntityManager } from 'typeorm';

export interface IUserBuilder {
  getUser(m?: EntityManager): Promise<UserEntity>;
  getNotificationDetail(userId: number): any;
}
