
import { Request, Response } from "express";
import { CrudController } from "./CrudControler";
import { sequelize } from "../config/database";
import { recettes } from "../models/recipe";

export class RecipeController extends CrudController {

    public read(req: Request, res: Response): void {
        recettes.findAll().then(recipes => res.json(recipes));
    }
    public show(req: Request, res: Response): void {
        recettes.findAll({ 'where': { id: req.params.id } }).then(recipes => res.json(recipes));
    }



}


