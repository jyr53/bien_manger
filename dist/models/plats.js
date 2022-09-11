"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plats = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class plats extends sequelize_1.Model {
}
exports.plats = plats;
plats.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    menu: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
}, {
    sequelize: database_1.sequelize,
    timestamps: false,
});
