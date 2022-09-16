import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../config/database";
import { saisons } from './saisons';
import { plats } from './plats';
import { ingredients_recettes } from './ingredients_recettes';
import { ingredients } from './ingredients';

export class recettes extends Model {
    public id!: number;
    public Name!: string;
    public Slug!: string;
    public description!: string;
    public guest!: number;
    public utilisateur_id!: number;
    public created_at!: Date;
    public updated_at!: Date;
    public plat_id!: number;
    public saison_id!: number;
}
recettes.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
    },
    Slug: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    guest: {
        type: DataTypes.INTEGER,
    },
    utilisateur_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    plat_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: plats,
            key: "id",
        }
    },
    saison_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: saisons,
            key: "id",
        }
    }
},
    {
        sequelize,
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }

);
recettes.belongsTo(saisons, { foreignKey: "saison_id" });
recettes.belongsTo(plats, { foreignKey: "plat_id" });
plats.hasOne(recettes, { foreignKey: "plat_id" });
saisons.hasOne(recettes, { foreignKey: "saison_id" });

recettes.belongsToMany(ingredients, { through: ingredients_recettes, foreignKey: "recettes_id", onDelete: 'CASCADE' });
ingredients.belongsToMany(recettes, { through: ingredients_recettes, foreignKey: "ingredients_id", onDelete: 'CASCADE' });

