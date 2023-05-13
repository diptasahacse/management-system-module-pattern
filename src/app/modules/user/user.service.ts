import User from "./user.model";


// Database Query => create user
export const createUserToDB = async () => {
    const user = new User({
      id: "7ee70880ttt667",
      role: "student",
      password: "12345678",
      name: {
        firstName: "Dipta",
        middleName: " ",
        lastName: "Saha",
      },
      gender: "male",
      email: "diptasaha@gmail.com",
      phone: "+8801613146412",
      emergencyPhone: "+8801613146412",
      presentAddress: "Dhaka",
      permanentAddress: "Khulna",
    });
    await user.save();
    return user
  };