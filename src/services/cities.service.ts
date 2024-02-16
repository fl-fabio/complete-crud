import { City } from "../models/city.model";
import { PaginatedResponse } from "../types/paginatedResponse.interface";
import { ICity } from "../types/city.interface";
import { getAll } from "../utils/common.functions";

export const showCities = async (query: {
  [key: string]: string | number;
}): Promise<PaginatedResponse<ICity>> => {
  const cities = await City.find();
  return getAll(cities, ["province"], query);
};

export const createCity = async (city: ICity) => {
  return await City.create(city);
};

export const findCity = async (id: string) => {
  return await City.findById(id);

};

export const updateCity = async (id: string, city: Partial<ICity>) => {
  return await City.findByIdAndUpdate(id, city);
};

export const deleteCity = async (id: string) => {
  return await City.findByIdAndDelete(id);
};
