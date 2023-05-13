import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

const app: Application = express();

// Using cors
app.use(cors());

// Parse Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  // Inserting a test data into mongodb
  /*
    Step1> Interface
    Step2> Schema
    Step3> Model
    Step4> Database Query
    
    */
  // Creating Interface
  // 1. Create an interface representing a document in MongoDB.
  interface IUser {
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
  // 2. Create a Schema corresponding to the document interface.
  //   creating schema using interface
  const userSchema = new Schema<IUser>({
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    dateOfBirth: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
    },
    emergencyPhone: {
      type: String,
      required: true,
    },
    presentAddress: {
      type: String,
      required: true,
    },
    permanentAddress: {
      type: String,
      required: true,
    },
  });

  // 3. Create a Model
  const User = model<IUser>("User", userSchema);

  //   4. create a instance of User

  const createUserToDB = async () => {
    const user = new User({
      id: "77667",
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
    console.log("User is Created");
  };

  createUserToDB();

  //   res.send("Welcome to mongoose");
  //   next();
});

export default app;
