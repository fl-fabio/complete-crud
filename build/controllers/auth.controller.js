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
exports.Signup = void 0;
const auth_service_1 = require("../services/auth.service");
const authFunctions_1 = require("../utils/authFunctions");
const users_service_1 = require("../services/users.service");
const Signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const userFounded = yield ((0, auth_service_1.findUserByEmail)(user.email));
    if (userFounded) {
        return res.status(400).json({ message: "Email already exists" });
    }
    try {
        const user = yield (0, users_service_1.createUser)(req.body);
        if (user) {
            const token = (0, authFunctions_1.createSecretToken)(user.id, 30);
            return res.status(200).json({ user: "User created", token });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.Signup = Signup;
