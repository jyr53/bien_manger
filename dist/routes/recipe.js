"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const RecipeController_1 = require("../controllers/RecipeController");
const recipeController = new RecipeController_1.RecipeController();
exports.router = express_1.default.Router({
    strict: true
});
exports.router.get("/recipe", (req, res) => recipeController.read(req, res));
exports.router.get("/recipe/show/:id", (req, res) => recipeController.show(req, res));
exports.router.post("/recipe/add", (req, res) => recipeController.create(req, res));
exports.router.post("/recipe/up/:id", (req, res) => recipeController.update(req, res));
exports.router.post("/recipe/del/:id", (req, res) => recipeController.delete(req, res));
