export interface IUserProfile {
  firstName: string;
  middleName: string;
  lastName: string;
  bio: string; // both student and teacher will have it
  profilePic: string; /// profile picture url/path
  locationLatitude: number;
  locationLongitude: number;
  address: string;
}
