import { query } from "express-validator";

export const validateQueryParams = [
  query("skip")
    .optional()
    .isInt()
    .toInt()
    .withMessage("skip must be an integer number"),
  query("limit")
    .optional()
    .isInt()
    .toInt()
    .withMessage("limit must be an integer number"),
];
