"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.etapeRouter = void 0;
const express_1 = __importDefault(require("express"));
const EtapesController_1 = require("../controllers/EtapesController");
let bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const etapesController = new EtapesController_1.EtapesController();
exports.etapeRouter = express_1.default.Router({
    strict: true
});
exports.etapeRouter.get("/etape", (req, res) => etapesController.read(req, res));
//router.get("/etape/show/:id", (req: Request, res: Response) => etapesController.show(req, res));
exports.etapeRouter.post("/etape/add", jsonParser, (req, res) => etapesController.create(req, res));
exports.etapeRouter.post("/etape/up/:id", (req, res) => etapesController.update(req, res));
exports.etapeRouter.post("/etape/del/:id", (req, res) => etapesController.delete(req, res));
