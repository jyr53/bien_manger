"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.images = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class images extends sequelize_1.Model {
}
exports.images = images;
images.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    alternate_text: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
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
