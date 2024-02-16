import { User } from "../models/user.model";
import { PaginatedResponse } from "../types/paginatedResponse.interface";
import { IUser } from "../types/user.interface";
import { getAll } from "../utils/common.functions";

export const showUsers = async (query: {
  [key: string]: string | number;
}): Promise<PaginatedResponse<IUser>> => {
  const users = await User.find().populate("city");
  return getAll(users, ["city", "email"], query);
};

export const findUser = async (id: string):Promise<IUser | null> => {
  const userFound = await User.findById(id).populate("city");
  return await User.findById(id).populate("city");
};

export const createUser = async (user: IUser) => {
  return await User.create(user);
};

export const updateUser = async (id: string, user: Partial<IUser>):Promise<IUser | null> => {
  return await User.findByIdAndUpdate(id, user).populate("city");
};

export const deleteUser = async (id: string) => {
  return await User.findByIdAndDelete(id);
};
