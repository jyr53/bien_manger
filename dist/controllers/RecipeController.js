"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeController = void 0;
const CrudControler_1 = require("./CrudControler");
const recipe_1 = require("../models/recipe");
const saisons_1 = require("../models/saisons");
const etapes_1 = require("../models/etapes");
const plats_1 = require("../models/plats");
const ingredients_1 = require("../models/ingredients");
class RecipeController extends CrudControler_1.CrudController {
    async read(req, res) {
        //   let photos = await images.findAll();
        let sais = await saisons_1.saisons.findAll();
        let recettess = await recipe_1.recettes.findAll();
        let ingredient = await ingredients_1.ingredients.findAll();
        let plat = await plats_1.plats.findAll();
        res.json({ saisons: [...sais], recettes: [...recettess], element: [...ingredient], plats: [...plat], });
    }
    async show(req, res) {
        recipe_1.recettes.findOne({
            where: { id: req.params.id },
            include: [ingredients_1.ingredients, plats_1.plats, saisons_1.saisons, etapes_1.etapes]
        }).then(recipes => res.json(recipes));
    }
    create(req, res) {
        recipe_1.recettes.create(req.body).then(recipes => res.json(recipes));
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
