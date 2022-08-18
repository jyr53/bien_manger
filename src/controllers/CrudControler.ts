import { Request, Response } from "express";

export abstract class CrudController {
    public create(req: Request, res: Response): void {
        throw new Error("la methode create n'est pas implementée");

    }
    public read(req: Request, res: Response): void {
        throw new Error("la methode create n'est pas implementée");
    }

    public update(req: Request, res: Response): void {
        throw new Error("la methode update n'est pas implementée");

    }
    public delete(req: Request, res: Response): void {
        throw new Error("la methode delete n'est pas implementée");

    }
}