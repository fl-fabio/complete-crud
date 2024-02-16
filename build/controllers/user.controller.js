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
exports.deleteUserHandler = exports.updateUserHandler = exports.getUserById = exports.getUsers = exports.addUser = void 0;
const user_service_1 = require("../services/user.service");
const bodyParser_1 = require("../middleware/bodyParser");
exports.addUser = [
    bodyParser_1.ValidateRequest,
    (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield (0, user_service_1.createUser)(req.body);
            res.status(200).json({ data: user });
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    }),
];
exports.getUsers = [
    bodyParser_1.ValidateRequest,
    (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const usersQueryParams = req.query;
            const { total, results } = yield (0, user_service_1.showUsers)(usersQueryParams);
            res.status(200).json({ total, data: results });
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    }),
];
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        try {
            const user = yield (0, user_service_1.findUser)(id);
            res.status(200).json({ data: user });
        }
        catch (err) {
            res.status(404).json({ error: "User not found" });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getUserById = getUserById;
exports.updateUserHandler = [
    bodyParser_1.ValidateRequest,
    (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const updatedUser = yield (0, user_service_1.updateUser)(id, req.body);
            if (updatedUser) {
                res.status(200).json({ upadated: updatedUser });
            }
            else
                res.status(404).json({ error: "User not found" });
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    }),
];
exports.deleteUserHandler = [
    bodyParser_1.ValidateRequest,
    (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const deletedUser = yield (0, user_service_1.deleteUser)(id);
            if (deletedUser) {
                res.status(200).json({ deleted: deletedUser });
            }
            else {
                res.status(404).json({ error: "User not found" });
            }
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    }),
];
