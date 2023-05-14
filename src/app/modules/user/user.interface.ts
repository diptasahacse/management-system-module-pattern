import { HydratedDocument, Model } from "mongoose";

export interface IUser {
  id: string;
  role: "student";
  password: string;

  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  dateOfBirth?: string;
  gender: "male" | "female";
  email?: string;
  phone: string;
  emergencyPhone: string;
  presentAddress: string;
  permanentAddress: string;
}
// Static
// export interface UserModel extends Model<IUser> {
//   getAdminUsers(): IUser[];
// }



// Interface for custom instance method
export interface IUserMethods {
  fullName(): string;
}


// Static + Method
export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}