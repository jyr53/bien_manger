
import express, { Request, Response } from "express";
import { request } from "http";
import { UtilisateurController } from "../controllers/UtilisateurController";

const utilisateurController = new UtilisateurController();
export const userRouter = express.Router({
    strict: true
});

userRouter.get("/user", (req: Request, res: Response) => utilisateurController.read(req, res));
userRouter.get("/user/show/:id", (req: Request, res: Response) => utilisateurController.show(req, res));
userRouter.post("/user/add", (req: Request, res: Response) => utilisateurController.create(req, res));
userRouter.post("/user/up/:id", (req: Request, res: Response) => utilisateurController.update(req, res));
userRouter.post("/user/del/:id", (req: Request, res: Response) => utilisateurController.delete(req, res));