import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../config/database";


export class saisons extends Model {
    public id!: number;
    public Name!: string;

}
saisons.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    Name: {
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