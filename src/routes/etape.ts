

import express, { Request, Response } from "express";
import { request } from "http";
import { EtapesController } from "../controllers/EtapesController";


let bodyParser = require('body-parser');
var jsonParser = bodyParser.json()

const etapesController = new EtapesController();
export const router = express.Router({
    strict: true
});

router.get("/etape", (req: Request, res: Response) => etapesController.read(req, res));
//router.get("/etape/show/:id", (req: Request, res: Response) => etapesController.show(req, res));
router.post("/etape/add", jsonParser, (req: Request, res: Response) => etapesController.create(req, res));
router.post("/etape/up/:id", (req: Request, res: Response) => etapesController.update(req, res));
router.post("/etape/del/:id", (req: Request, res: Response) => etapesController.delete(req, res));