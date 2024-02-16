"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.City = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const citySchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        require: true
    },
    province: {
        type: String,
        require: true,
    },
    center: {
        type: String,
        require: true,
    }
}, { timestamps: true });
exports.City = mongoose_1.default.model("City", citySchema);
