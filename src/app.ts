import express from "express";
import { router as usersApi } from "./routes/users.route";
import {router as citiesApi} from "./routes/cities.route";
import { router as commonApi } from "./routes/common.route";
import {router as authApi} from './routes/auth.route'

export const app = express();

//configure the middleware for body requests
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/status", (req, res) => {
  res.json({ message: "Server is running!" });
});

//indicate a routes groups
app.use("/users", usersApi);
app.use("/cities", citiesApi);
app.use("/auth", authApi);
app.use("*", commonApi);
