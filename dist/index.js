"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
var cors = require('cors')
const constants_1 = require("./config/constants");
const recipe_1 = require("./routes/recipe");
const utilisateur_1 = require("./routes/utilisateur");
const app = (0, express_1.default)();
const allowedOrigins = ['http://localhost:4000', '*'];
const options = {
    origin: "*",
    optionsSuccessStatus: 200
};
//app.use(path,(req,res,next));
app.use(express_1.default.json());
//app.use('/static',express.static(join))
app.get("/", (req, res) => res.send("hello world salut bande de nase"));
//route des recettes
app.get("/recipe", cors(options), recipe_1.router);
app.get("/recipe/show/:id", recipe_1.router);
app.post("/recipe/add", recipe_1.router);
app.post("/recipe/up/:id", recipe_1.router);
app.post("/recipe/del/:id", recipe_1.router);
//routes d'utilisateur
app.get("/user", utilisateur_1.userRouter);
app.get("/user/show/:id", utilisateur_1.userRouter);
app.post("/user/add", utilisateur_1.userRouter);
app.post("/user/up/:id", utilisateur_1.userRouter);
app.post("/user/del/:id", utilisateur_1.userRouter);
app.listen(constants_1.PORT, () => {
    console.log("Server is listenning on port" + constants_1.PORT);
});
