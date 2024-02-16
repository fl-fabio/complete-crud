"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const mongoose_1 = __importDefault(require("mongoose"));
const environment_1 = __importDefault(require("./environment"));
const PORT = environment_1.default.getPort();
const CONNECTION_URL = 'mongodb://localhost:27017/' + environment_1.default.getDBName();
//configure mongoose
mongoose_1.default.connect(CONNECTION_URL).then(() => {
    app_1.app.listen(3000, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
    .catch(error => console.error(error));
