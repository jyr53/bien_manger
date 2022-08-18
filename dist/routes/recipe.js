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
exports.router.get("/recipe/{id}", (req, res) => recipeController.show(req, res));
