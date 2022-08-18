

import express, { Request, Response } from "express";
import { RecipeController } from "../controllers/RecipeController";

const recipeController = new RecipeController();
export const router = express.Router({
    strict: true
});

router.get("/recipe", (req: Request, res: Response) => recipeController.read(req, res));
router.get("/recipe/{id}", (req: Request, res: Response) => recipeController.show(req, res));