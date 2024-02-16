"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const users_validation_1 = require("../middleware/validators/users.validation");
const query_validation_1 = require("../middleware/validators/query.validation");
const users_controller_1 = require("../controllers/users.controller");
exports.router = (0, express_1.Router)();
exports.router.get("/", query_validation_1.validateQueryParams, users_controller_1.getUsers);
exports.router.get("/:id", users_controller_1.getUserById);
exports.router.post("/", users_validation_1.validatePostRequest, users_controller_1.addUser);
exports.router.put("/:id", users_validation_1.validatePutRequest, users_controller_1.updateUserHandler);
exports.router.delete("/:id", users_controller_1.deleteUserHandler);