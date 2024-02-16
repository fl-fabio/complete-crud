import { Request, Response } from "express";
import {
  showCities,
  findCity,
  createCity,
  updateCity,
  deleteCity,
} from "../services/cities.service";

import { ValidateRequest } from "../middleware/bodyParser";

export const addCity = [
  ValidateRequest,
  async (req: Request, res: Response) => {
    try {
      const city = await createCity(req.body);
      res.status(200).json({ data: city });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  },
];

export const getCities = [
  ValidateRequest,
  async (req: Request, res: Response) => {
    try {
      const citiesQueryParams = req.query;
      const { total, results } = await showCities(
        citiesQueryParams as { [key: string]: string | number }
      );
      res.status(200).json({ total, data: results });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  },
];

export const getCityById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const city = await findCity(id);
    if (city) res.status(200).json({ data: city });
    else res.status(404).json({ error: "City not found" });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const updateCityById = [
  ValidateRequest,
  async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const updatedCity = await updateCity(id, req.body);
      if (updatedCity) res.status(200).json({ updated: updatedCity });
      else res.status(404).json({ error: "City not found" });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  },
];

export const deletecityById = [
  ValidateRequest,
  async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const deletedCity = deleteCity(id);
      if (deletedCity) res.status(200).json({ deleted: deletedCity });
      else res.status(404).json({ error: "City not found" });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  },
];
