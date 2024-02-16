"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCityPutRequest = exports.validateCityPostRequest = void 0;
const express_validator_1 = require("express-validator");
exports.validateCityPostRequest = [
    (0, express_validator_1.body)("name")
        .notEmpty()
        .withMessage("Name is required")
        .isLength({ min: 3 })
        .withMessage("Name must be at least 3 characters long"),
    (0, express_validator_1.body)("province")
        .notEmpty()
        .withMessage("Province is required")
        .isLength({ min: 4 })
        .withMessage("Name must be at least 4 characters long"),
    (0, express_validator_1.body)("center")
        .notEmpty()
        .withMessage("Center is required")
        .isLength({ min: 6 })
        .withMessage("Name must be at least 6 characters long"),
];
exports.validateCityPutRequest = [
    (0, express_validator_1.body)("name")
        .notEmpty()
        .withMessage("Name is required")
        .isLength({ min: 3 })
        .withMessage("Name must be at least 3 characters long"),
    (0, express_validator_1.body)("province")
        .notEmpty()
        .withMessage("Province is required")
        .isLength({ min: 4 })
        .withMessage("Name must be at least 4 characters long"),
    (0, express_validator_1.body)("center")
        .notEmpty()
        .withMessage("Center is required")
        .isLength({ min: 6 })
        .withMessage("Name must be at least 6 characters long"),
];
