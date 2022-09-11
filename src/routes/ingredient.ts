import express, { Request, Response } from "express";
import { request } from "http";
import { IngredientsController } from "../controllers/IngredientsController";


let bodyParser = require('body-parser');
var jsonParser = bodyParser.json()

const ingredientsController = new IngredientsController();
export const ingredientRouter = express.Router({
    strict: true
});


ingredientRouter.post("/ingredient/add", jsonParser, (req: Request, res: Response) => ingredientsController.create(req, res));
/*router.post("/recipe/up/:id", (req: Request, res: Response) => recipeController.update(req, res));
router.post("/recipe/del/:id", (req: Request, res: Response) => recipeController.delete(req, res));*/