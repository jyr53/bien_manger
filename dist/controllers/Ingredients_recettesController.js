"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ingredients_recettesController = void 0;
const CrudControler_1 = require("./CrudControler");
const ingredients_recettes_1 = require("../models/ingredients_recettes");
class Ingredients_recettesController extends CrudControler_1.CrudController {
    read(req, res) {
        ingredients_recettes_1.ingredients_recettes.findAll().then(content => res.json(content));
    }
    create(req, res) {
        ingredients_recettes_1.ingredients_recettes.create(req.body).then(content => res.json(content));
    }
    update(req, res) {
        ingredients_recettes_1.ingredients_recettes.update(req.body, { 'where': { id: req.params.id } }).then(content => res.json(content));
        res.json("ok");
    }
    delete(req, res) {
        ingredients_recettes_1.ingredients_recettes.destroy({ 'where': { id: req.params.id } });
        res.json("c'est fait");
    }
}
exports.Ingredients_recettesController = Ingredients_recettesController;
