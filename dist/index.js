"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const jwt_1 = require("./authenticate/jwt");
const constants_1 = require("./config/constants");
const recipe_1 = require("./routes/recipe");
const utilisateur_1 = require("./routes/utilisateur");
const ingredient_1 = require("./routes/ingredient");
const ingredients_recettes_1 = require("./routes/ingredients_recettes");
let bodyParser = require('body-parser');
const app = (0, express_1.default)();
app.use(express_1.default.json());
var jsonParser = bodyParser.json();
const options = {
    origin: "*"
};
//app.use(path,(req,res,next));
app.use((0, cors_1.default)(options));
//app.use('/static',express.static(join))
app.get("/", (req, res) => res.send("hello world salut bande de nase"));
//route des recettes
app.get("/recipe", recipe_1.router);
app.get("/recipe/show/:id", recipe_1.router);
app.post("/recipe/add", jsonParser, recipe_1.router);
app.post("/recipe/up/:id", recipe_1.router);
app.post("/recipe/del/:id", recipe_1.router);
//routes ingredients
app.post("/ingredient/add", jsonParser, ingredient_1.ingredientRouter);
//reoutes ingredient_recette
app.post("/ingredient_recette/add", jsonParser, ingredients_recettes_1.ingredient_recetteRouter);
//routes d'utilisateur
app.get("/user", utilisateur_1.userRouter);
app.get("/user/show/:id", utilisateur_1.userRouter);
app.post("/user/add", utilisateur_1.userRouter);
app.post("/user/up/:id", utilisateur_1.userRouter);
app.post("/user/del/:id", utilisateur_1.userRouter);
/*console.log('le token JWT:', (0, jwt_1.generateToken)());*/
app.listen(constants_1.PORT, () => {
    console.log("Server is listenning on port" + constants_1.PORT);
});
