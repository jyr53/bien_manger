"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recettes = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
const saisons_1 = require("./saisons");
const plats_1 = require("./plats");
const ingredients_recettes_1 = require("./ingredients_recettes");
const ingredients_1 = require("./ingredients");
class recettes extends sequelize_1.Model {
}
exports.recettes = recettes;
recettes.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    Name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
        unique: true,
    },
    Slug: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
        unique: true,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    guest: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    utilisateur_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    plat_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: plats_1.plats,
            key: "id",
        }
    },
    saison_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: saisons_1.saisons,
            key: "id",
        }
    }
}, {
    sequelize: database_1.sequelize,
    timestamps: false,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});
recettes.belongsTo(saisons_1.saisons, { foreignKey: "saison_id" });
recettes.belongsTo(plats_1.plats, { foreignKey: "plat_id" });
plats_1.plats.hasOne(recettes, { foreignKey: "plat_id" });
saisons_1.saisons.hasOne(recettes, { foreignKey: "saison_id" });
recettes.belongsToMany(ingredients_1.ingredients, { through: ingredients_recettes_1.ingredients_recettes, foreignKey: "recettes_id" });
ingredients_1.ingredients.belongsToMany(recettes, { through: ingredients_recettes_1.ingredients_recettes, foreignKey: "ingredients_id" });
