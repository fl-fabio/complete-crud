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
exports.deletecityById = exports.updateCityById = exports.getCityById = exports.getCities = exports.addCity = void 0;
const cities_service_1 = require("../services/cities.service");
const bodyParser_1 = require("../middleware/bodyParser");
exports.addCity = [
    bodyParser_1.ValidateRequest,
    (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const city = yield (0, cities_service_1.createCity)(req.body);
            res.status(200).json({ data: city });
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    }),
];
exports.getCities = [
    bodyParser_1.ValidateRequest,
    (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const citiesQueryParams = req.query;
            const { total, results } = yield (0, cities_service_1.showCities)(citiesQueryParams);
            res.status(200).json({ total, data: results });
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    }),
];
const getCityById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const city = yield (0, cities_service_1.findCity)(id);
        if (city)
            res.status(200).json({ data: city });
        else
            res.status(404).json({ error: "City not found" });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getCityById = getCityById;
exports.updateCityById = [
    bodyParser_1.ValidateRequest,
    (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const updatedCity = yield (0, cities_service_1.updateCity)(id, req.body);
            if (updatedCity)
                res.status(200).json({ updated: updatedCity });
            else
                res.status(404).json({ error: "City not found" });
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    }),
];
exports.deletecityById = [
    bodyParser_1.ValidateRequest,
    (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const deletedCity = (0, cities_service_1.deleteCity)(id);
            if (deletedCity)
                res.status(200).json({ deleted: deletedCity });
            else
                res.status(404).json({ error: "City not found" });
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    }),
];
