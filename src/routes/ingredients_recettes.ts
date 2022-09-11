import express, { Request, Response } from "express";
import { request } from "http";
import { Ingredients_recettesController } from "../controllers/Ingredients_recettesController";


let bodyParser = require('body-parser');
var jsonParser = bodyParser.json()

const Ingredient_recettesController = new Ingredients_recettesController();
export const ingredient_recetteRouter = express.Router({
    strict: true
});


ingredient_recetteRouter.post("/ingredient_recette/add", jsonParser, (req: Request, res: Response) => Ingredient_recettesController.create(req, res));
/*router.post("/recipe/up/:id", (req: Request, res: Response) => recipeController.update(req, res));
router.post("/recipe/del/:id", (req: Request, res: Response) => recipeController.delete(req, res));*/