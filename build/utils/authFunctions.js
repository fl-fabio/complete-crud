"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSecretToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createSecretToken = (id, days) => {
    return jsonwebtoken_1.default.sign({ id }, 'secret', {
        expiresIn: days * 24 * 60 * 60
    });
};
exports.createSecretToken = createSecretToken;
