// import { BaseEntity } from 'src/common/base';
import { Column, Entity, OneToMany } from 'typeorm';
import { instanceToPlain, plainToClass } from 'class-transformer';
import { UserAccessEntity } from './user-access.entity';
// import { NotificationEntity } from '../notification/notification.entity';
// import { PatientEntity } from '../patient';
// import { USER_ROLE, UserRole, USER_STATUS, UserStatus } from 'src/common';
// import { IUserEntity } from 'src/modules/users';
import {
  BaseEntity,
  USER_ROLE,
  USER_STATUS,
  UserRole,
  UserStatus,
} from '@apps/api/common';
import { IUserEntity } from '@apps/api/users';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity implements IUserEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  //

  @Column({ type: 'enum', enum: USER_ROLE, nullable: false })
  role: UserRole;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column({ type: 'enum', enum: USER_STATUS, default: USER_STATUS.PENDING })
  status: UserStatus;

  /*
   * * **One-to-Many** relationship between `User` and `UserAccess` if the Application
   * * is built for Web, Mobile, or Desktop Application.
   * * But in this case, the relationship is **One-to-One** because the Application is just build for Web only.
   */
  // @OneToMany(() => UserAccessEntity, (o: UserAccessEntity) => o.user, { nullable: true, cascade: ['insert', 'update', 'remove', 'soft-remove', 'recover'] })
  // userAccess: UserAccessEntity[];

  @OneToMany(() => UserAccessEntity, (o: UserAccessEntity) => o.user, {
    nullable: true,
    cascade: ['insert', 'update', 'remove', 'soft-remove', 'recover'],
  })
  userAccesses: UserAccessEntity[];

  // @OneToOne(() => PatientEntity, (o: PatientEntity) => o.user, {
  //   cascade: true,
  // })
  // @JoinColumn({ name: 'patient_id', referencedColumnName: 'id' })
  // patient: PatientEntity;

  // @Column({ name: 'patient_id', nullable: true, unsigned: true })
  // patientId: number;

  // write relationship between User and Notification
  // @OneToMany(() => NotificationEntity, (o: NotificationEntity) => o.user, {
  //   nullable: true,
  // })
  // notifications: NotificationEntity[];

  toDto() {
    return plainToClass(UserEntity, this);
  }
  toJson() {
    return instanceToPlain(this);
  }
  constructor(partial: Partial<UserEntity>) {
    super();
    Object.assign(this, partial);
  }
}
