import express, { Application } from "express";
import cors from "cors";

// 
const app: Application = express();


// Application route
import userRoute from './app/modules/user/user.route'


// Using Cors
app.use(cors());

// Parse Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/v1/user",userRoute)

export default app;
