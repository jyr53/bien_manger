"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.etapes = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class etapes extends sequelize_1.Model {
}
exports.etapes = etapes;
etapes.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    number: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    content: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    recette_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize: database_1.sequelize,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});
