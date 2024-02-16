import { Request, Response } from "express";
import {
  showUsers,
  findUser,
  createUser,
  updateUser,
  deleteUser,
} from "../services/users.service";
import { ValidateRequest } from "../middleware/bodyParser";

import { IUser } from "../types/user.interface";

export const addUser = [
  ValidateRequest,
  async (req: Request, res: Response) => {
    try {
      const user = await createUser(req.body);
      res.status(200).json({ data: user });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  },
];

export const getUsers = [
  ValidateRequest,
  async (req: Request, res: Response) => {
    try {
      const usersQueryParams = req.query;
      const { total, results } = await showUsers(
        usersQueryParams as { [key: string]: string | number }
      );
      res.status(200).json({ total, data: results });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  },
];

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await findUser(id);
    if (user) res.status(200).json({ data: user });
    else res.status(404).json({ error: "User not found" });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const updateUserHandler = [
  ValidateRequest,
  async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const updatedUser = await updateUser(id, req.body);
      if (updatedUser) {
        res.status(200).json({ upadated: updatedUser });
      } else res.status(404).json({ error: "User not found" });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  },
];

export const deleteUserHandler = [
  ValidateRequest,
  async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const deletedUser = await deleteUser(id);
      if (deletedUser) {
        res.status(200).json({ deleted: deletedUser });
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  },
];
