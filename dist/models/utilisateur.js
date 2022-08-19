"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utilisateur = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class utilisateur extends sequelize_1.Model {
}
exports.utilisateur = utilisateur;
utilisateur.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { isEmail: true },
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    permission_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize: database_1.sequelize,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});
