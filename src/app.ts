import express, { Application } from "express";
import cors from "cors";

// Application route
import userRoutes from "./app/modules/user/user.route";
//
const app: Application = express();

// Using Cors
app.use(cors());

// Parse Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Api for User
app.use("/api/v1/user", userRoutes);

export default app;
