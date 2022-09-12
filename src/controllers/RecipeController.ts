
import { Request, Response } from "express";
import { CrudController } from "./CrudControler";
import { recettes } from "../models/recipe";
import { saisons } from "../models/saisons";
import { images } from "../models/images";
import { etapes } from "../models/etapes";
import { plats } from "../models/plats";
import { ingredients } from "../models/ingredients";


export class RecipeController extends CrudController {

    public async read(req: Request, res: Response) {
     //   let photos = await images.findAll();
        let sais = await saisons.findAll();
        let recettess = await recettes.findAll();
        let ingredient = await ingredients.findAll();
        let plat = await plats.findAll();
        res.json({ saisons: [...sais], recettes: [...recettess], element: [...ingredient], plats: [...plat], });

    }
    public async show(req: Request, res: Response) {

        recettes.findOne(
            {
                where:
                    { id: req.params.id },
                include: [ingredients, plats, saisons, etapes]
            }
        ).then(recipes => res.json(recipes));

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