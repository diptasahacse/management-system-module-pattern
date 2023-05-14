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
router.get("/admins", getAllAdmins); // for confusion with /admin and /:id, we have to keep /admin above /:id, 

// get user by id -> get user
router.get("/:id", getUserById); // same name is required for getUserById function

// Post -> create user
router.post("/create-user", createUser);

export default router;
