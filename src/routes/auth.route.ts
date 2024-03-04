import { Router } from "express";
import { Signup } from "../controllers/auth.controller";

export const router = Router();

router.post("/signup", Signup)