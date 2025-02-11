// import { BaseEntity } from 'src/common';
// import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
// import { instanceToPlain, plainToClass } from 'class-transformer';
// import {
//   NotificationStatusEnum,
//   NotificationTypeEnum,
// } from 'src/notification/enums';
// import { INotificationEntity } from 'src/notification/interfaces/notification.interface';
// import { UserEntity } from '../users';

// @Entity('notifications')
// export class NotificationEntity
//   extends BaseEntity
//   implements INotificationEntity
// {
//   @Column()
//   subject: string;

//   @Column()
//   message: string;

//   @Column()
//   destination: string;

//   @Column({
//     type: 'enum',
//     enum: NotificationStatusEnum,
//     default: NotificationStatusEnum.PENDING,
//   })
//   status: NotificationStatusEnum;

//   @Column({ type: 'enum', enum: NotificationTypeEnum })
//   type: NotificationTypeEnum;

//   /** relationship */
//   @ManyToOne(() => UserEntity, (o: UserEntity) => o.notifications, {
//     onDelete: 'CASCADE',
//     nullable: false,
//   })
//   @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
//   user: UserEntity;

//   @Column({ name: 'user_id', nullable: false, unsigned: true })
//   userId: number;

//   toDto() {
//     return plainToClass(NotificationEntity, this);
//   }
//   toJson() {
//     return instanceToPlain(this);
//   }
//   constructor(partial: Partial<NotificationEntity>) {
//     super();
//     Object.assign(this, partial);
//   }
// }
