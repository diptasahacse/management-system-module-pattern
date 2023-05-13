import express from "express";
import { createUser, getUsers } from "./user.controller";

const router = express.Router();

// Get Users
router.get("/", getUsers);

// Post -> create user
router.post("/create-user", createUser);

export default router;
