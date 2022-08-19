"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const UtilisateurController_1 = require("../controllers/UtilisateurController");
const utilisateurController = new UtilisateurController_1.UtilisateurController();
exports.userRouter = express_1.default.Router({
    strict: true
});
exports.userRouter.get("/user", (req, res) => utilisateurController.read(req, res));
exports.userRouter.get("/user/show/:id", (req, res) => utilisateurController.show(req, res));
exports.userRouter.post("/user/add", (req, res) => utilisateurController.create(req, res));
exports.userRouter.post("/user/up/:id", (req, res) => utilisateurController.update(req, res));
exports.userRouter.post("/user/del/:id", (req, res) => utilisateurController.delete(req, res));
