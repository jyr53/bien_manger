"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeController = void 0;
const CrudControler_1 = require("./CrudControler");
const recipe_1 = require("../models/recipe");
const saisons_1 = require("../models/saisons");
const ingredients_1 = require("../models/ingredients");
class RecipeController extends CrudControler_1.CrudController {
    async read(req, res) {
        let sais = await saisons_1.saisons.findAll();
        let recettess = await recipe_1.recettes.findAll();
        let ingredient = await ingredients_1.ingredients.findAll();
        res.json({ saisons: [...sais], recettes: [...recettess], images: [...photos], element: [...ingredient], });
    }
    async show(req, res) {
        /*  let photos = await images.findAll({ 'where': { id: req.params.id } });
          let etape = await etapes.findAll({ 'where': { recette_id: req.params.id } });
          let recette = await recettes.findAll({ 'where': { id: req.params.id } });
          let ingreRecet = await ingredients_recettes.findAll({ 'where': { recettes_id: req.params.id } });
          res.json({ recettes: [...recette], etape: [...etape], images: [...photos], ingre_recet: [...ingreRecet], });*/
        recipe_1.recettes.findOne({
            where: { id: req.params.id },
            include: [ingredients_1.ingredients]
            //plats, saisons, etapes,
        }).then(rectte => res.json(rectte));
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
