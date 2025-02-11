// import { AppointmentEntity } from './appointment';
// import { NotificationEntity } from './notification';
// import { PatientEntity } from './patient';
import { UserEntity, UserAccessEntity } from './users';

// export * from './appointment';
// export * from './patient';
export * from './users';
// export * from './notification';

export const ENTITIES = [
  UserEntity,
  //   AppointmentEntity,
  UserAccessEntity,
  //   PatientEntity,
  //   NotificationEntity,
];
