import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../config/database";


export class ingredients extends Model {
    public id!: number;
    public Name!: string;
    public unit!: string;

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