"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const VerifyToken = (req, res, next) => {
    var _a;
    // Ottieni il token dal Bearer Token negli headers
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    console.log('token', token);
    if (!token) {
        return res.status(401).json({ message: 'Token not provided' });
    }
    try {
        // Verifica e decodifica il token, tira fuori il payload. Tipizzarlo con il Payload corretto
        const decodedToken = jsonwebtoken_1.default.verify(token, 'secret');
        next();
    }
    catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};
exports.VerifyToken = VerifyToken;
