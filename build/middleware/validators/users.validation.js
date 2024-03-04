"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePutRequest = exports.validatePostRequest = void 0;
const express_validator_1 = require("express-validator");
const cities_service_1 = require("../../services/cities.service");
exports.validatePostRequest = [
    (0, express_validator_1.body)("name")
        .notEmpty()
        .withMessage("Name is required")
        .isLength({ min: 4 })
        .withMessage("Name must be at least 4 characters long"),
    (0, express_validator_1.body)("surname")
        .notEmpty()
        .withMessage("Surname is required")
        .isLength({ min: 4 })
        .withMessage("Surname must be at least 4 characters long"),
    (0, express_validator_1.body)("email")
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Invalid Email"),
    (0, express_validator_1.body)("city")
        .notEmpty()
        .withMessage("City is required")
        .custom((value) => __awaiter(void 0, void 0, void 0, function* () {
        const foundCity = yield (0, cities_service_1.findCity)(value);
        if (!foundCity) {
            throw new Error("City not found");
        }
        return true;
    })),
    (0, express_validator_1.body)("phone")
        .notEmpty()
        .withMessage("Phone number is required")
        .matches(/^\d{10}$/)
        .withMessage("Invalid phone number format"),
    (0, express_validator_1.body)("password")
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters long")
        .matches(/^(?=.*[A-Z])(?=.*[\W_]).{8,}$/)
        .withMessage("Password must contain at least one uppercase letter, one special character and one number"),
];
exports.validatePutRequest = [
    (0, express_validator_1.body)("name")
        .optional()
        .notEmpty()
        .withMessage("Name is required")
        .isLength({ min: 4 })
        .withMessage("Name must be at least 4 characters long"),
    (0, express_validator_1.body)("surname")
        .optional()
        .notEmpty()
        .withMessage("Surname is required")
        .isLength({ min: 4 })
        .withMessage("Surname must be at least 4 characters long"),
    (0, express_validator_1.body)("email")
        .optional()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Invalid Email"),
    (0, express_validator_1.body)("city")
        .optional()
        .notEmpty()
        .withMessage("City is required")
        .isLength({ min: 4 })
        .withMessage("City must be at least 4 characters long"),
    (0, express_validator_1.body)("phone")
        .optional()
        .notEmpty()
        .withMessage("Phone number is required")
        .matches(/^\d{10}$/)
        .withMessage("Invalid phone number format"),
    (0, express_validator_1.body)("password")
        .optional()
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters long"),
];
