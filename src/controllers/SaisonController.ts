import { Request, Response } from "express";
import { CrudController } from "./CrudControler";
import { saisons } from "../models/saisons";

export class SaisonController extends CrudController {

    public read(req: Request, res: Response): void {
        saisons.findAll().then(saison => res.json(saison));
    }

}