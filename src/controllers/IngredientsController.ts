import { Request, Response } from "express";
import { CrudController } from "./CrudControler";
import { ingredients } from "../models/ingredients";

export class IngredientsController extends CrudController {

    public read(req: Request, res: Response): void {
        ingredients.findAll().then(ingredient => res.json(ingredient));
    }
    public create(req: Request, res: Response): void {
        ingredients.create(req.body).then(ingredient => res.json(ingredient));
    }
    public update(req: Request, res: Response): void {
        ingredients.update(req.body, { 'where': { id: req.params.id } }).then(ingredient => res.json(ingredient));
        res.json("ok");
    }
    public delete(req: Request, res: Response): void {
        ingredients.destroy({ 'where': { id: req.params.id } });
        res.json("c'est fait");
    }
}