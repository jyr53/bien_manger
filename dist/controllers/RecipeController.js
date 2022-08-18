"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeController = void 0;
const CrudControler_1 = require("./CrudControler");
const recipe_1 = require("../models/recipe");
class RecipeController extends CrudControler_1.CrudController {
    read(req, res) {
        recipe_1.recettes.findAll().then(recipes => res.json(recipes));
    }
    show(req, res) {
        recipe_1.recettes.findAll({ 'where': { id: req.params.id } }).then(recipes => res.json(recipes));
    }
}
exports.RecipeController = RecipeController;
