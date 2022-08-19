

import express, { Request, Response } from "express";
import { request } from "http";
import { RecipeController } from "../controllers/RecipeController";

const recipeController = new RecipeController();
export const router = express.Router({
    strict: true
});

router.get("/recipe", (req: Request, res: Response) => recipeController.read(req, res));
router.get("/recipe/show/:id", (req: Request, res: Response) => recipeController.show(req, res));
router.post("/recipe/add", (req: Request, res: Response) => recipeController.create(req, res));
router.post("/recipe/up/:id", (req: Request, res: Response) => recipeController.update(req, res));
router.post("/recipe/del/:id",(req: Request, res: Response) => recipeController.delete(req, res));