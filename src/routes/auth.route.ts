import { Router } from "express";
import { Login, Signup } from "../controllers/auth.controller";

export const router = Router();

router.post("/signup", Signup);
router.post("/login", Login);