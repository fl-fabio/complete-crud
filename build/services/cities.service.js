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
exports.deleteCity = exports.updateCity = exports.findCity = exports.createCity = exports.showCities = void 0;
const city_model_1 = require("../models/city.model");
const common_functions_1 = require("../utils/common.functions");
const showCities = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const cities = yield city_model_1.City.find();
    return (0, common_functions_1.getAll)(cities, ["province"], query);
});
exports.showCities = showCities;
const createCity = (city) => __awaiter(void 0, void 0, void 0, function* () {
    return yield city_model_1.City.create(city);
});
exports.createCity = createCity;
const findCity = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield city_model_1.City.findById(id);
});
exports.findCity = findCity;
const updateCity = (id, city) => __awaiter(void 0, void 0, void 0, function* () {
    return yield city_model_1.City.findByIdAndUpdate(id, city);
});
exports.updateCity = updateCity;
const deleteCity = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield city_model_1.City.findByIdAndDelete(id);
});
exports.deleteCity = deleteCity;
