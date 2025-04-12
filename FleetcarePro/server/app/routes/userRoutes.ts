import express from "express";
import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
} from "../controllers/userController";

const userRoutes = express.Router();

// @GET ALL USERS
userRoutes.get("/", getAllUsers);

// @CREATE USER
userRoutes.post("/", createUser);

// @UPDATE USER
userRoutes.put("/:id", updateUser);

// @DELETE USER
userRoutes.delete("/:id", deleteUser);

// Get user by ID
userRoutes.get("/:id", getUserById);

export default userRoutes;
