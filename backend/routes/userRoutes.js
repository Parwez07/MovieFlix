import express from "express";
import {
  addremoveFavorites,
  login,
  logout,
  profile,
  register,
} from "../controllers/userControllers.js";
import { isAuthenticated } from "../middlewares/authenticate.js";
const router = express.Router();

//all user routes
router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthenticated, logout);
router.get("/profile", isAuthenticated, profile);
router.put("/liked", isAuthenticated, addremoveFavorites);

export default router;
