const mockingoose = require("mockingoose");

import { User } from "../models/user.model";

import {
  showUsers,
  findUser,
  createUser,
  deleteUser,
} from "../services/users.service";

describe("Users service", () => {
  describe("fetchUsers", () => {
    it("should return the list of users", async () => {
      mockingoose(User).toReturn(
        [
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
        ],
        "find"
      );

      const response = await showUsers({ skip: 0 });
      console.log(response);
      const { results, total } = response;
      expect(results[1].email).toBe("giuanni@gmail.com");
      expect(total).toBe(2);
    });

    it("should return a user", async () => {
      const _doc = {
        id: "649aed92a351f91f347cf871",
        name: "Delfo",
        surname: "Mallox",
        email: "delfo@gmail.com",
        city: "649ae361796d3154c548eee",
        phone: "3385387142",
        password: "Delfo2023",
      };

      mockingoose(User).toReturn(_doc, "findOne");

      const userFounded = await User.findById({
        id: "649aed92a351f91f347cf871",
      });
      console.log(userFounded);
      const response = await findUser("649aefcd9c848cf04bbfac4a");
      expect(response!.phone).toBe("3385387142");
    });
  });
});
