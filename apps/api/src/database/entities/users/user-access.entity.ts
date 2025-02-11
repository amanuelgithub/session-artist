import { Entity, Column, JoinColumn, ManyToOne } from 'typeorm';
import { Exclude, instanceToPlain, plainToClass } from 'class-transformer';
import { UserEntity } from './user.entity';
import {
  BaseEntity,
  USER_ACCESS_STATUS,
  UserAccessStatus,
} from '@apps/api/common';
import { IUserAccessEntity } from '@apps/api/users';

/**
 * UserAccess class is used to store the user access details for different
 * types of platforms like Web, Mobile, and Desktop Applications.
 */
@Entity({ name: 'user_accesses' })
export class UserAccessEntity extends BaseEntity implements IUserAccessEntity {
  @Column({ nullable: true })
  @Exclude({ toPlainOnly: true })
  otpCode: number;

  @Column({ nullable: true })
  @Exclude({ toPlainOnly: true })
  secretHash: string;

  @Column({ nullable: true })
  @Exclude({ toPlainOnly: true })
  tempSecretHash: string;

  @Column({ nullable: true })
  @Exclude({ toPlainOnly: true })
  emailActivationToken: string;

  @Column({
    type: 'enum',
    enum: USER_ACCESS_STATUS,
    default: USER_ACCESS_STATUS.PENDING,
    nullable: false,
  })
  status: UserAccessStatus;

  @ManyToOne(() => UserEntity, (o: UserEntity) => o.userAccesses, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: UserEntity;

  @Column({ name: 'user_id', nullable: false, unsigned: true })
  userId: number;

  toDto() {
    return plainToClass(UserAccessEntity, this);
  }

  toJson() {
    return instanceToPlain(this);
  }

  constructor(partial: Partial<UserAccessEntity>) {
    super();
    Object.assign(this, partial);
  }
}
