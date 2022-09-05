
import { Request, Response } from "express";
import { CrudController } from "./CrudControler";
import { recettes } from "../models/recipe";
import { saisons } from "../models/saisons";
import { images } from "../models/images";
import { etapes } from "../models/etapes";
import { ingredients } from "../models/ingredients";
import { ingredients_recettes } from "../models/ingredients_rectettes";

export class RecipeController extends CrudController {

    public async read(req: Request, res: Response) {
        let photos = await images.findAll();
        let sais = await saisons.findAll();
        let recettess = await recettes.findAll();
        let ingredient = await ingredients.findAll();
        console.log("tu y est");
        res.json({ saisons: [...sais], recettes: [...recettess], images: [...photos], element: [...ingredient], });

    }
    public async show(req: Request, res: Response) {
        let photos = await images.findAll({ 'where': { id: req.params.id } });
        let etape = await etapes.findAll({ 'where': { recette_id: req.params.id } });
        let recette = await recettes.findAll({ 'where': { id: req.params.id } });
        let ingreRecet = await ingredients_recettes.findAll({ 'where': { recettes_id: req.params.id } });
        res.json({ recettes: [...recette], etape: [...etape], images: [...photos], ingre_recet: [...ingreRecet], });

    }
    public create(req: Request, res: Response): void {
        console.log('POUOPUOUPOUPOUPOUPOUPOUPOUO    ');
        console.log(req.body);
        recettes.create(req.body).then(recipes => res.json(recipes));
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