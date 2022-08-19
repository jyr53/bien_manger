import { Request, Response } from "express";
import { CrudController } from "./CrudControler";
import { utilisateur } from "../models/utilisateur";

export class UtilisateurController extends CrudController {

    public read(req: Request, res: Response): void {
        utilisateur.findAll().then(user => res.json(user));
    }
    public show(req: Request, res: Response): void {
        utilisateur.findAll({ 'where': { id: req.params.id } }).then(user => res.json(user));
    }
    public create(req: Request, res: Response): void {
        utilisateur.create(req.body).then(user => res.json(user));
        console.log(req.body);
        res.json("ok");
    }
    public update(req: Request, res: Response): void {
        utilisateur.update(req.body, { 'where': { id: req.params.id } }).then(user => res.json(user));
        res.json("ok");

    }
    public delete(req: Request, res: Response): void {
        utilisateur.destroy({ 'where': { id: req.params.id } });
        res.json("c'est fait");
    }
}