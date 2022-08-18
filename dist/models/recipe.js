"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recettes = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
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
        allowNull: false,
        unique: true,
    },
    Slug: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
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
        allowNull: false,
    }
}, {
    sequelize: database_1.sequelize,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});
