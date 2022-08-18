"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const constants_1 = require("./config/constants");
const recipe_1 = require("./routes/recipe");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => res.send("hello world salut bande de nase"));
app.get("/recipe", recipe_1.router);
app.get("/recipe/id", recipe_1.router);
app.listen(constants_1.PORT, () => {
    console.log("Server is listenning on port" + constants_1.PORT);
});