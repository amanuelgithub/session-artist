import { Injectable } from '@nestjs/common';
import { DataSource, EntityManager } from 'typeorm';
import { DetailResponse, UserRole } from '../../common';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class GetUserService {
  constructor(private readonly ds: DataSource) {}

  public async getBy(opt: {
    id: number;
    role?: UserRole;
  }): Promise<DetailResponse<UserEntity | null>> {
    const { id, role } = opt;
    const qb = this.ds.getRepository(UserEntity).createQueryBuilder('user');
    // qb.leftJoinAndSelect('user.userAccess', 'userAccess'); // is a sensitive data so it is not needed

    if (id) {
      qb.where('user.id = :id', { id });
    }
    if (role) {
      qb.andWhere('user.role = :role', { role });
    }

    const user = await qb.getOne();
    return new DetailResponse(user);
  }

  // get the user by phone or email or username
  public async getUserByPhoneEmailOrUsername(
    em: EntityManager,
    phone?: string,
    email?: string,
    username?: string,
  ): Promise<UserEntity | null> {
    const where = phone ? { phone: phone } : email ? { email } : { username };
    const user = await em.findOne(UserEntity, {
      where,
      join: {
        alias: 'user',
        leftJoinAndSelect: { userAccess: 'user.userAccesses' },
      },
    });
    return user;
  }
}
