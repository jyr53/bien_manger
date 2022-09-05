"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const constants_1 = require("./config/constants");
const recipe_1 = require("./routes/recipe");
const utilisateur_1 = require("./routes/utilisateur");
const app = (0, express_1.default)();
app.use(express_1.default.json());
let bodyParser = require('body-parser');
const alowedOrigins = ["*"];
const options = {
    origin: "*"
};
//app.use(path,(req,res,next));
app.use((0, cors_1.default)(options));
app.use(express_1.default.json());
//app.use('/static',express.static(join))
app.get("/", (req, res) => res.send("hello world salut bande de nase"));
//route des recettes
app.get("/recipe", recipe_1.router);
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
