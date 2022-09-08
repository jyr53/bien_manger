import { Request, Response } from "express";
import { CrudController } from "./CrudControler";
import { ingredients_recettes } from "../models/ingredients_recettes";

export class Ingredients_recettesController extends CrudController {

    public read(req: Request, res: Response): void {
        ingredients_recettes.findAll().then(content => res.json(content));
    }
    public create(req: Request, res: Response): void {
        console.log(req);
        /*  ingredients_recettes.create(req.body).then(content=> res.json(content));
          console.log(req.body);*/
        res.json("ok");
    }
    public update(req: Request, res: Response): void {
        ingredients_recettes.update(req.body, { 'where': { id: req.params.id } }).then(content => res.json(content));
        res.json("ok");

    }
    public delete(req: Request, res: Response): void {
        ingredients_recettes.destroy({ 'where': { id: req.params.id } });
        res.json("c'est fait");
    }
}