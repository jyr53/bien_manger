import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../config/database";

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
    },
    saison_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
},
    {
        sequelize,
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }

);