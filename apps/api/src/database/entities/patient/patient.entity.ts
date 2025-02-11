// import { Column, Entity, OneToMany, OneToOne } from 'typeorm';
// import { BaseEntity } from 'src/common/base';
// import { plainToClass, instanceToPlain } from 'class-transformer';
// import { UserEntity } from '../users';
// import { IPatientEntity } from 'src/modules/patient/patients/interfaces';
// import { AppointmentEntity } from '../appointment';
// import { GENDER, Gender } from 'src/common';

// @Entity({ name: 'patients' })
// export class PatientEntity extends BaseEntity implements IPatientEntity {
//   @Column({ nullable: true })
//   firstName: string;

//   @Column({ nullable: true })
//   lastName: string;

//   @Column({ nullable: true })
//   dateOfBirth: Date;

//   @Column({
//     type: 'enum',
//     enum: GENDER,
//     nullable: true,
//   })
//   gender: Gender;

//   @Column({ nullable: true })
//   address: string;

//   @OneToOne(() => UserEntity, (o: UserEntity) => o.patient, { onDelete: 'CASCADE', nullable: false })
//   user: UserEntity;

//   @OneToMany(() => AppointmentEntity, (o: AppointmentEntity) => o.patient, { nullable: true })
//   appointments: AppointmentEntity[];

//   toDto() {
//     return plainToClass(PatientEntity, this);
//   }
//   toJson() {
//     return instanceToPlain(this);
//   }
//   constructor(partial?: Partial<PatientEntity>) {
//     super();
//     Object.assign(this, partial);
//   }
// }
