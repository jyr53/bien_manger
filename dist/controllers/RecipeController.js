"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeController = void 0;
const CrudControler_1 = require("./CrudControler");
const recipe_1 = require("../models/recipe");
const saisons_1 = require("../models/saisons");
const images_1 = require("../models/images");
const etapes_1 = require("../models/etapes");
class RecipeController extends CrudControler_1.CrudController {
    async read(req, res) {
        let photos = await images_1.images.findAll();
        let sais = await saisons_1.saisons.findAll();
        let recettess = await recipe_1.recettes.findAll();
        res.json({ saisons: [...sais], recettes: [...recettess], images: [...photos], });
    }
    async show(req, res) {
        let photos = await images_1.images.findAll({ 'where': { id: req.params.id } });
        let etape = await etapes_1.etapes.findAll({ 'where': { recette_id: req.params.id } });
        let recette = await recipe_1.recettes.findAll({ 'where': { id: req.params.id } });
        res.json({ recettes: [...recette], etape: [...etape], images: [...photos], });
    }
    create(req, res) {
        recipe_1.recettes.create(req.body).then(recipes => res.json(recipes));
        console.log(req.body);
        res.json("ok");
    }
    update(req, res) {
        recipe_1.recettes.update(req.body, { 'where': { id: req.params.id } }).then(recipes => res.json(recipes));
        res.json("ok");
    }
    delete(req, res) {
        recipe_1.recettes.destroy({ 'where': { id: req.params.id } });
        res.json("c'est fait");
    }
}
exports.RecipeController = RecipeController;
