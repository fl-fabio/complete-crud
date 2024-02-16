"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const users_route_1 = require("./routes/users.route");
const cities_route_1 = require("./routes/cities.route");
const common_route_1 = require("./routes/common.route");
exports.app = (0, express_1.default)();
//configure the middleware for body requests
exports.app.use(express_1.default.urlencoded({ extended: false }));
exports.app.use(express_1.default.json());
exports.app.get("/status", (req, res) => {
    res.json({ message: "Server is running!" });
});
//indicate a routes groups
exports.app.use("/users", users_route_1.router);
exports.app.use("/cities", cities_route_1.router);
exports.app.use("*", common_route_1.router);
