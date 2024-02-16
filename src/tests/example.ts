const mockingoose = require("mockingoose");

import { User } from "../models/user.model";
/* User.findById({id:"649aed92a351f91f347cf871"}).then((doc:any)=> {
  console.log(JSON.parse(JSON.stringify(doc)))
}); */

describe("test mongoose User model", () => {
  it("should return the doc with findById", () => {
    const _doc = {
      _id: "649aed92a351f91f347cf871",
      name: "Delfo",
      surname: "Mallox",
      email: "delfo@gmail.com",
      //city: "649ae361796d3154c548eee",
      phone: "3385387142",
      password: "Delfo2023",
    };

    //mock of the object model, when invocked findOne return _doc
    mockingoose(User).toReturn(_doc, "findOne");

    return User.findById({ id: "649aedd54329acb23587e3471" }).then((doc) => {
      console.log(JSON.parse(JSON.stringify(doc)));
      expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc);
    });
  });

  it("should return the doc with update", () => {
    const _doc = {
      _id: "649aed92a351f91f347cf871",
      name: "Delfo",
      surname: "Mallox",
      email: "delfo@gmail.com",
      //city: "649ae361796d3154c548eee",
      phone: "3385387142",
      password: "Delfo2023",
    };

    mockingoose(User).toReturn(_doc, "updateOne");

    return User.updateOne({ name: "Ciccio" })
      .where({ _id: "649aed92a351f91f347cf871" })
      .then((doc) => JSON.parse(JSON.stringify(doc)));
  }); 

  it("should return the doc with findById", () => {
    const _doc = {
      _id: "649aed92a351f91f347cf871",
      name: "Delfo",
      surname: "Mallox",
      email: "delfo@gmail.com",
      //city: "649ae361796d3154c548eee",
      phone: "3385387142",
      password: "Delfo2023",
    };

    const finderMock = (query: any) => {
      expect(query.getQuery()).toMatchSnapshot("findById query");

      if (query.getQuery()._id === "649aed92a351f91f347cf871") {
        return _doc;
      }
    };

    mockingoose(User).toReturn(finderMock, "findOne");

    return User.findById("649aed92a351f91f347cf871").then((doc) => {
      expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc);
    });
  }); 
});
