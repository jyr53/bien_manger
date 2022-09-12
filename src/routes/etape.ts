

import express, { Request, Response } from "express";
import { request } from "http";
import { EtapesController } from "../controllers/EtapesController";


let bodyParser = require('body-parser');
var jsonParser = bodyParser.json()

const etapesController = new EtapesController();
export const etapeRouter = express.Router({
    strict: true
});

etapeRouter.get("/etape", (req: Request, res: Response) => etapesController.read(req, res));
//router.get("/etape/show/:id", (req: Request, res: Response) => etapesController.show(req, res));
etapeRouter.post("/etape/add", jsonParser, (req: Request, res: Response) => etapesController.create(req, res));
etapeRouter.post("/etape/up/:id", (req: Request, res: Response) => etapesController.update(req, res));
etapeRouter.post("/etape/del/:id", (req: Request, res: Response) => etapesController.delete(req, res));