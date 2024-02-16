import { body, query } from "express-validator";
import { findCity } from "../../services/cities.service";
import { ICity } from "../../types/city.interface";

export const validatePostRequest = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 4 })
    .withMessage("Name must be at least 4 characters long"),
  body("surname")
    .notEmpty()
    .withMessage("Surname is required")
    .isLength({ min: 4 })
    .withMessage("Surname must be at least 4 characters long"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid Email"),
    body("city")
    .notEmpty()
    .withMessage("City is required")
    .custom(async (value) => {
      const foundCity = await findCity(value);
      if (!foundCity) {
        throw new Error("City not found");
      }
      return true;
    }),
  body("phone")
    .notEmpty()
    .withMessage("Phone number is required")
    .matches(/^\d{10}$/)
    .withMessage("Invalid phone number format"),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
];

export const validatePutRequest = [
  body("name")
    .optional()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 4 })
    .withMessage("Name must be at least 4 characters long"),
  body("surname")
    .optional()
    .notEmpty()
    .withMessage("Surname is required")
    .isLength({ min: 4 })
    .withMessage("Surname must be at least 4 characters long"),
  body("email")
    .optional()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid Email"),
  body("city")
    .optional()
    .notEmpty()
    .withMessage("City is required")
    .isLength({ min: 4 })
    .withMessage("City must be at least 4 characters long"),
  body("phone")
    .optional()
    .notEmpty()
    .withMessage("Phone number is required")
    .matches(/^\d{10}$/)
    .withMessage("Invalid phone number format"),
  body("password")
    .optional()
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
];

