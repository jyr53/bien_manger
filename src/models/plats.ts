import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../config/database";
import { recettes } from './recipe';
 

export class plats extends Model {
    public id!: number;
    public menu!: string;

}
plats.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    menu: {
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
