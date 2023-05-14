import express from "express";
import {
  createUser,
  getAllAdmins,
  getUserById,
  getUsers,
} from "./user.controller";

const router = express.Router();

// Get Users
router.get("/", getUsers);

// Get Users
router.get("/all-admins", getAllAdmins);

// get user by id -> get user
router.get("/:id", getUserById); // same name is required for getUserById function

// Post -> create user
router.post("/create-user", createUser);

export default router;
