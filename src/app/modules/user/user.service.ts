import { IUser } from "./user.interface";
import User from "./user.model";

// Database Query

// => create user
export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);
  await user.save();
  return user;
};
// get All users
export const getUsersFromDB = async () => {
  const users = await User.find();

  return users;
};
