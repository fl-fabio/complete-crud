import { body } from "express-validator";

export const validateCityPostRequest = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters long"),
  body("province")
    .notEmpty()
    .withMessage("Province is required")
    .isLength({ min: 4 })
    .withMessage("Name must be at least 4 characters long"),
  body("center")
    .notEmpty()
    .withMessage("Center is required")
    .isLength({ min: 6 })
    .withMessage("Name must be at least 6 characters long"),
];

export const validateCityPutRequest = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters long"),
  body("province")
    .notEmpty()
    .withMessage("Province is required")
    .isLength({ min: 4 })
    .withMessage("Name must be at least 4 characters long"),
  body("center")
    .notEmpty()
    .withMessage("Center is required")
    .isLength({ min: 6 })
    .withMessage("Name must be at least 6 characters long"),
];
