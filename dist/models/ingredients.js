"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingredients = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class ingredients extends sequelize_1.Model {
}
exports.ingredients = ingredients;
ingredients.init({
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
    unit: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
}, {
    sequelize: database_1.sequelize,
    timestamps: false,
});
