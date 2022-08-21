"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaisonController = void 0;
const CrudControler_1 = require("./CrudControler");
const saisons_1 = require("../models/saisons");
class SaisonController extends CrudControler_1.CrudController {
    read(req, res) {
        saisons_1.saisons.findAll().then(saison => res.json(saison));
    }
}
exports.SaisonController = SaisonController;
