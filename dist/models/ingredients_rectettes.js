"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingredients_recettes = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class ingredients_recettes extends sequelize_1.Model {
}
exports.ingredients_recettes = ingredients_recettes;
ingredients_recettes.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    quantity: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    Slug: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    ingredients_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    recettes_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize: database_1.sequelize,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});
