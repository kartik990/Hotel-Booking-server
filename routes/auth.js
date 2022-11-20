import express from "express";
import { register, login } from "../controllers/auth.js";
const router = express.Router();

//register new user
router.post("/register", register);

//login a user
router.post("/login", login);

export default router;
