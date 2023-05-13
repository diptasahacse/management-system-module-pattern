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
export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();

  return users;
};

// get user by id from db
export const getUserByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const users = await User.findOne(
    { id: payload },

    {
      //this is called field filtering
      name: 1, //1 means true
      email: 1,
    }
  );

  return users;
};
