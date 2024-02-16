import { Router, Request, Response } from "express";

export const router = Router();

//Mismatch URL
router.all("*", (req: Request, res: Response) => {
  res.status(404).send({ error: true, message: "Chek your URL pleased" });
});
