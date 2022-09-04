import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../config/database";

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
        allowNull: false,
    },


    ingredients_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
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