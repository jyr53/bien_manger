"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurController = void 0;
const CrudControler_1 = require("./CrudControler");
const utilisateur_1 = require("../models/utilisateur");
class UtilisateurController extends CrudControler_1.CrudController {
    read(req, res) {
        utilisateur_1.utilisateur.findAll().then(user => res.json(user));
    }
    show(req, res) {
        utilisateur_1.utilisateur.findAll({ 'where': { id: req.params.id } }).then(user => res.json(user));
    }
    create(req, res) {
        utilisateur_1.utilisateur.create(req.body).then(user => res.json(user));
        console.log(req.body);
        res.json("ok");
    }
    update(req, res) {
        utilisateur_1.utilisateur.update(req.body, { 'where': { id: req.params.id } }).then(user => res.json(user));
        res.json("ok");
    }
    delete(req, res) {
        utilisateur_1.utilisateur.destroy({ 'where': { id: req.params.id } });
        res.json("c'est fait");
    }
}
exports.UtilisateurController = UtilisateurController;
