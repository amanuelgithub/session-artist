import { USER_ROLE, UserRole } from '@apps/api/common';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column({ default: false })
  emailVerified: boolean;

  @Column({ type: 'enum', enum: USER_ROLE, default: USER_ROLE.CUSTOMER })
  role: UserRole;

  @Column({ nullable: true })
  profilePic: string;

  // avatarUrl = google picture url
  @Column()
  avatarUrl: string;
}

// {
//   sub: '105149303689016574839',
//   name: 'Amanuel Girma',
//   given_name: 'Amanuel',
//   family_name: 'Girma',
//   picture: 'https://lh3.googleusercontent.com/a/ACg8ocKtiXgJNbLOLU6jpbVJgL7A34MCxiLqxNSLx2WX2k2KDbWGIQ=s96-c',
//   email: 'amanuelgirma070@gmail.com',
//   email_verified: true
// }
