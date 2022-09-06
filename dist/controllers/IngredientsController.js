"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientsController = void 0;
const CrudControler_1 = require("./CrudControler");
const ingredients_1 = require("../models/ingredients");
class IngredientsController extends CrudControler_1.CrudController {
    read(req, res) {
        ingredients_1.ingredients.findAll().then(etapes => res.json(etapes));
    }
    create(req, res) {
        ingredients_1.ingredients.create(req.body).then(etape => res.json(etape));
        console.log(req.body);
        res.json("ok");
    }
    update(req, res) {
        ingredients_1.ingredients.update(req.body, { 'where': { id: req.params.id } }).then(etape => res.json(etape));
        res.json("ok");
    }
    delete(req, res) {
        ingredients_1.ingredients.destroy({ 'where': { id: req.params.id } });
        res.json("c'est fait");
    }
}
exports.IngredientsController = IngredientsController;
