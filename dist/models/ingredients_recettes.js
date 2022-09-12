"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingredients_recettes = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
const recipe_1 = require("./recipe");
const ingredients_1 = require("./ingredients");
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
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    ingredients_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: ingredients_1.ingredients,
            key: "id",
        }
    },
    recettes_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: recipe_1.recettes,
            key: "id",
        }
    }
}, {
    sequelize: database_1.sequelize,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});
