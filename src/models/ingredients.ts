import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../config/database";


export class ingredients extends Model {
    public id!: number;
    public Name!: string;
    public unité!:string;

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
    unité: {
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