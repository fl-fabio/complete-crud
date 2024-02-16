"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = void 0;
const getAll = (data, filters, query) => {
    let filteredResults = [...data];
    const { skip, limit } = query, queryFilters = __rest(query, ["skip", "limit"]);
    filters.forEach((filter) => {
        queryFilters[filter] &&
            (filteredResults = filteredResults.filter((result) => result[filter] === query[filter]));
    });
    if (skip !== undefined && limit !== undefined) {
        filteredResults = filteredResults.slice(skip, skip + limit);
    }
    return {
        total: data.length,
        results: filteredResults,
    };
};
exports.getAll = getAll;
