import { Request, Response } from "express";
import User from "../models/user";

// @GET ALL USERS
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();

    if (!users) {
      res.status(404).json({
        message: "No users found",
      });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching users",
      error: error,
    });
  }
};

// @CREATE USER
const createUser = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, userName, password, role } = req.body;

    const newUser = new User({
      firstName,
      lastName,
      userName,
      password,
      role,
    });

    await newUser.save();

    res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating user",
      error: error,
    });
  }
};

// @UPDATE USER
const updateUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = req.body;
  const updatedUser = await User.findByIdAndUpdate(id, user);

  res.status(201).json({
    message: "Successfully updated user",
    user: updatedUser,
  });
};

// @DELETE USER
const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await User.findByIdAndDelete(id);
    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting user",
      error: error,
    });
  }
};

// @GET USER BY ID
const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ _id: id });
    res.status(200).json({ id: user });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching user",
      error: error,
    });
  }
};

export { getAllUsers, createUser, updateUser, deleteUser, getUserById };
