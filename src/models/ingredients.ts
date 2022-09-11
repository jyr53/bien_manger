import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../config/database";
import { recettes } from "./recipe";
import { ingredients_recettes } from "./ingredients_rectettes";


export class ingredients extends Model {
    public id!: number;
    public Name!: string;
<<<<<<< HEAD
    public unité!: string;
=======
    public unit!: string;
>>>>>>> d5234b34554868afec09acddde7c76d37a4490fb

}
ingredients.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    unit: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
},
    {
        sequelize,
        timestamps: false,
    }

);
