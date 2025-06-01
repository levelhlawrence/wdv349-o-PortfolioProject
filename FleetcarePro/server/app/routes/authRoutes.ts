import { Router } from "express";
import passport from "passport";
import {
  registerUser,
  loginUser,
  logoutUser,
  authCheck,
} from "../controllers/authController";

const router = Router();

router.post("/register", registerUser);
// @ts-ignore
router.post("/login", passport.authenticate("local"), loginUser);
router.post("/logout", logoutUser);
// @ts-ignore
router.get("/check", authCheck);

export default router;
