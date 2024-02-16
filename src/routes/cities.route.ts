import { Router } from "express";
import {
  validateCityPostRequest,
  validateCityPutRequest,
} from "../middleware/validators/cities.validation";
import { validateQueryParams } from "../middleware/validators/query.validation";

import {
  getCities,
  getCityById,
  addCity,
  updateCityById,
  deletecityById,
} from "../controllers/cities.controller";

export const router = Router();

router.get("/", validateQueryParams, getCities);
router.get("/:id", getCityById);
router.post("/",validateCityPostRequest, addCity);
router.put(":/id", validateCityPutRequest, updateCityById);
router.delete(":/id", deletecityById);