import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../config/database";
import { recettes } from "./recipe";
import { ingredients } from "./ingredients";

export class ingredients_recettes extends Model {
    public id!: number;
    public quantity!: string;
    public ingredients_id!: number;
    public recettes_id!: number;
    public created_at!: Date;
    public updated_at!: Date;
}
ingredients_recettes.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    quantity: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },


    ingredients_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: ingredients,
            key: "id",
        }
    },
    recettes_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: recettes,
            key: "id",
        }
    }
},
    {
        sequelize,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }

);
//recettes.belongsToMany(ingredients, { through: ingredients_recettes ,foreignKey: "recettes_id" });
//ingredients.belongsToMany(recettes, { through: ingredients_recettes,foreignKey: "ingredients_id"});
//    *

