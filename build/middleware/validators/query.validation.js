"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateQueryParams = void 0;
const express_validator_1 = require("express-validator");
exports.validateQueryParams = [
    (0, express_validator_1.query)("skip")
        .optional()
        .isInt()
        .toInt()
        .withMessage("skip must be an integer number"),
    (0, express_validator_1.query)("limit")
        .optional()
        .isInt()
        .toInt()
        .withMessage("limit must be an integer number"),
];
