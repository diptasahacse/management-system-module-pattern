import { IUser } from "./user.interface";
import User from "./user.model";

// Database Query

// => create user
export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload); // Here, User is class and user is instance of that class
  console.log(user.fullName());
  //Here
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

// get user by id from db
export const getAdminUsersFromDB = async () => {
  const admins = await User.getAdminUsers();

  return admins;
};

/*
Class => Attached --> Methods -->Directly call using class

Example for instance,
const user = new User()
user.fullName()

Example for Static
User.fullName()


*/
