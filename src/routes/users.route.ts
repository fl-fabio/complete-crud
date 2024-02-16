import { Router } from "express";
import {
  validatePostRequest,
  validatePutRequest,
} from "../middleware/validators/users.validation";

import { validateQueryParams } from "../middleware/validators/query.validation";

import {
  getUsers,
  getUserById,
  addUser,
  updateUserHandler,
  deleteUserHandler,
} from "../controllers/users.controller";

export const router = Router();

router.get("/", validateQueryParams, getUsers);
router.get("/:id", getUserById);
router.post("/", validatePostRequest, addUser);
router.put("/:id", validatePutRequest, updateUserHandler);
router.delete("/:id", deleteUserHandler);
