"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingredient_recetteRouter = void 0;
const express_1 = __importDefault(require("express"));
const Ingredients_recettesController = require("../controllers/Ingredients_recettesController");
let bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const Ingredient_recettesController = new Ingredients_recettesController.Ingredients_recettesController();
exports.ingredient_recetteRouter = express_1.default.Router({
    strict: true
});
exports.ingredient_recetteRouter.post("/ingredient_recette/add", jsonParser, (req, res) => Ingredient_recettesController.create(req, res));
/*router.post("/recipe/up/:id", (req: Request, res: Response) => recipeController.update(req, res));
router.post("/recipe/del/:id", (req: Request, res: Response) => recipeController.delete(req, res));*/
