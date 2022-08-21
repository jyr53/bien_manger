import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../config/database";

export class images extends Model {
    public id!: number;
    public url!: string;
    public alternate_text!: string;
    public recettes_id!: number;
    public created_at!: Date;
    public updated_at!: Date;
}
images.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    alternate_text: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    recettes_id: {
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