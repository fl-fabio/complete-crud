"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var fetchData = function () {
    var todos = [];
    return axios_1.default
        .get("https://jsonplaceholder.typicode.com/todos")
        .then(function (response) {
        response.data.map(function (item) { return todos.push(item); });
        return todos;
    })
        .catch(function (error) {
        console.log("There is an error: ".concat(error));
    });
};
fetchData().then(function (result) {
    return console.log(result);
}).catch(function (error) { return console.log(error); });
