import { Request, Response } from "express";
import { CrudController } from "./CrudControler";
import { etapes } from "../models/etapes";

export class EtapesController extends CrudController {

    public read(req: Request, res: Response): void {
        etapes.findAll().then(etapes => res.json(etapes));
    }

    public create(req: Request, res: Response): void {
        etapes.create(req.body).then(etape => res.json(etape));
       // console.log(req.body);
        //  res.json("ok");

    }
    public show(
        req: Request, res: Response): void {
        etapes.findOne({ 'where': { id: req.params.id } })
        .then(etape => res.json(etape));
        //res.json("ok");
    }

    public update(req: Request, res: Response): void {
        etapes.update(req.body, { 'where': { id: req.params.id } }).then(etape => res.json(etape));
        res.json("ok");

    }
    public delete(req: Request, res: Response): void {
        etapes.destroy({ 'where': { id: req.params.id } });
        res.json("c'est fait");
    }
}