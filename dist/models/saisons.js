"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saisons = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class saisons extends sequelize_1.Model {
}
exports.saisons = saisons;
saisons.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    Name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
}, {
    sequelize: database_1.sequelize,
    timestamps: false,
});
