
import { Request, Response } from "express";
import { CrudController } from "./CrudControler";
import { recettes } from "../models/recipe";
import { saisons } from "../models/saisons";
import { images } from "../models/images";
import { etapes } from "../models/etapes";

export class RecipeController extends CrudController {

    public async read(req: Request, res: Response) {
        let photos = await images.findAll();
        let sais = await saisons.findAll();
        let recettess = await recettes.findAll();
        res.json({ saisons: [...sais], recettes: [...recettess], images: [...photos], });

    }
    public async show(req: Request, res: Response) {
        let recette = await recettes.findAll({ 'where': { id: req.params.id } });
        let etape = await etapes.findAll({ 'where': { recette_id: req.params.id } });
        res.json({ recette: [...recette], etape: [...etape] });

    }
    public create(req: Request, res: Response): void {
        recettes.create(req.body).then(recipes => res.json(recipes));
        console.log(req.body);
        res.json("ok");
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