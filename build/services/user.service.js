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
exports.deleteUser = exports.updateUser = exports.createUser = exports.findUser = exports.showUsers = void 0;
const user_model_1 = require("../models/user.model");
const common_functions_1 = require("../utils/common.functions");
const showUsers = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_model_1.User.find();
    return (0, common_functions_1.getAll)(users, ["city", "email"], query);
});
exports.showUsers = showUsers;
const findUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.User.findById(id);
});
exports.findUser = findUser;
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.User.create(user);
});
exports.createUser = createUser;
const updateUser = (id, user) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.User.findByIdAndUpdate(id, user);
});
exports.updateUser = updateUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.User.findByIdAndDelete(id);
});
exports.deleteUser = deleteUser;
