import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import User from "../models/user";

// <---------- AUTH Controller -----------> //

// @[Post] /api_v1/auth/register
const registerUser = async (req: Request, res: Response) => {
  try {
    const hashed = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
      ...req.body,
      password: hashed,
      provider: "local",
    });

    const { password, ...data } = user.toJSON();
    res.status(201).json({ user: data });
  } catch (err) {
    res.status(500).json({ message: "Registration failed" });
  }
};

// @[Post] /api_v1/auth/login
const loginUser = (_req: Request, res: Response) => {
  res.status(200).json({ message: "Logged in" });
};

// @[Post] /api_v1/auth/logout
// controllers/authController.ts
const logoutUser = async (req: Request, res: Response, next: NextFunction) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
};

// GET /api_v1/auth/check
const authCheck = async (req: Request, res: Response) => {
  if (req.isAuthenticated()) {
    return res.json({ isAuthenticated: true, user: req.user });
  }
  res.status(401).json({ isAuthenticated: false });
};

export { registerUser, loginUser, logoutUser, authCheck };
