
import { Request, Response } from "express";
import { CrudController } from "./CrudControler";
import { recettes } from "../models/recipe";
import { saisons } from "../models/saisons";
import { etapes } from "../models/etapes";
import { ingredients } from "../models/ingredients";
import { ingredients_recettes } from "../models/ingredients_recettes";
import { plats } from "../models/plats";

export class RecipeController extends CrudController {

    public async read(req: Request, res: Response) {
        let sais = await saisons.findAll();
        let recettess = await recettes.findAll();
        let ingredient = await ingredients.findAll();
        let plat = await plats.findAll();
        res.json({ saisons: [...sais], recettes: [...recettess], element: [...ingredient], plats: [...plat], });

    }
    public async show(req: Request, res: Response) {
        let etape = await etapes.findAll({ 'where': { recette_id: req.params.id } });
        let recette = await recettes.findAll({ 'where': { id: req.params.id } });
        let ingreRecet = await ingredients_recettes.findAll({ 'where': { recettes_id: req.params.id } });
        res.json({ recettes: [...recette], etape: [...etape], ingre_recet: [...ingreRecet], });

    }
    public create(req: Request, res: Response): void {
        recettes.create(req.body).then(recipes => res.json(recipes));
    }
    public update(req: Request, res: Response): void {
        recettes.update(req.body, { 'where': { id: req.params.id } }).then(recipes => res.json(recipes));
        res.json("ok");

    }
    public delete(req: Request, res: Response): void {
        recettes.destroy({ 'where': { id: req.params.id } });
        res.json("c'est fait");
    }
}