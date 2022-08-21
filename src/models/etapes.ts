import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../config/database";

export class etapes extends Model {
    public id!: number;
    public number!: number;
    public content!: string;
    public recette_id!: number;
    public created_at!: Date;
    public updated_at!: Date;

}
etapes.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    number: {
        type: DataTypes.INTEGER,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    recette_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},
    {
        sequelize,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }

);