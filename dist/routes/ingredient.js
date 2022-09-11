"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingredientRouter = void 0;
const express_1 = __importDefault(require("express"));
const IngredientsController_1 = require("../controllers/IngredientsController");
let bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const ingredientsController = new IngredientsController_1.IngredientsController();
exports.ingredientRouter = express_1.default.Router({
    strict: true
});
exports.ingredientRouter.post("/ingredient/add", jsonParser, (req, res) => ingredientsController.create(req, res));
/*router.post("/recipe/up/:id", (req: Request, res: Response) => recipeController.update(req, res));
router.post("/recipe/del/:id", (req: Request, res: Response) => recipeController.delete(req, res));*/ 
