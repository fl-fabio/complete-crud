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
const mockingoose = require("mockingoose");
const user_model_1 = require("../models/user.model");
const users_service_1 = require("../services/users.service");
describe("Users service", () => {
    describe("fetchUsers", () => {
        it("should return the list of users", () => __awaiter(void 0, void 0, void 0, function* () {
            mockingoose(user_model_1.User).toReturn([
                {
                    id: "649aed92a351f91f347cf871",
                    name: "Delfo",
                    surname: "Mallox",
                    email: "delfo@gmail.com",
                    city: "649ae361796d3154c548eee",
                    phone: "3385387142",
                    password: "Delfo2023",
                },
                {
                    id: "649aefcd9c848cf04bbfac4a",
                    name: "Giuanni",
                    surname: "Pagliara",
                    email: "giuanni@gmail.com",
                    city: "649ae361796d3154c548eee5",
                    phone: "3385387142",
                    password: "Giuanni2023",
                },
            ], "find");
            const response = yield (0, users_service_1.showUsers)({ skip: 0 });
            console.log(response);
            const { results, total } = response;
            expect(results[1].email).toBe("giuanni@gmail.com");
            expect(total).toBe(2);
        }));
        it("should return a user", () => __awaiter(void 0, void 0, void 0, function* () {
            const _doc = {
                id: "649aed92a351f91f347cf871",
                name: "Delfo",
                surname: "Mallox",
                email: "delfo@gmail.com",
                city: "649ae361796d3154c548eee",
                phone: "3385387142",
                password: "Delfo2023",
            };
            mockingoose(user_model_1.User).toReturn(_doc, "findOne");
            const userFounded = yield user_model_1.User.findById({
                id: "649aed92a351f91f347cf871",
            });
            console.log(userFounded);
            const response = yield (0, users_service_1.findUser)("649aefcd9c848cf04bbfac4a");
            expect(response.phone).toBe("3385387142");
        }));
    });
});
