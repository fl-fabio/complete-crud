"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
//Mismatch URL
exports.router.all("*", (req, res) => {
    res.status(404).send({ error: true, message: "Chek your URL pleased" });
});
