"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EtapesController = void 0;
const CrudControler_1 = require("./CrudControler");
const etapes_1 = require("../models/etapes");
class EtapesController extends CrudControler_1.CrudController {
    read(req, res) {
        etapes_1.etapes.findAll().then(etapes => res.json(etapes));
    }
    create(req, res) {
        etapes_1.etapes.create(req.body);
        //.then(etape => res.json(etape));
        res.json("ok");
    }
    update(req, res) {
        etapes_1.etapes.update(req.body, { 'where': { id: req.params.id } }).then(etape => res.json(etape));
        res.json("ok");
    }
    delete(req, res) {
        etapes_1.etapes.destroy({ 'where': { id: req.params.id } });
        res.json("c'est fait");
    }
}
exports.EtapesController = EtapesController;
