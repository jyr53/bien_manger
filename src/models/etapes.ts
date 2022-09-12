import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../config/database";
import { recettes } from './recipe';

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
        allowNull: true,
    },
    recette_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
},
    {
        sequelize,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }

);
etapes.belongsTo(recettes, { foreignKey: "recette_id" });
recettes.hasMany(etapes,{foreignKey: "recette_id" });
