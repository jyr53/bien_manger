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
}
recettes.init({
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
    Slug: {
        type: DataTypes.STRING,
        allowNull: false,
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