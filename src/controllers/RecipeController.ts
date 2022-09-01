
import { Request, Response } from "express";
import { CrudController } from "./CrudControler";
import { recettes } from "../models/recipe";
import { saisons } from "../models/saisons";
import { images } from "../models/images";

export class RecipeController extends CrudController {

    public async read(req: Request, res: Response) {

        //let essaie1 = [saisons.findAll().then(saison => res.json(saison))];
        let sais = await saisons.findAll();
        let recettess = await recettes.findAll();
        let photos = await images.findAll();
        res.json({ saisons: [...sais], recettes: [...recettess], photos: [...photos] })

    }
    public show(req: Request, res: Response): void {
        recettes.findAll({ 'where': { id: req.params.id } }).then(recipes => res.json(recipes));
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