import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../config/database";

export class utilisateur extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public pasword!: string;
    public created_at!: Date;
    public updated_at!: Date;
    public permission_id!: number;

}
utilisateur.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:
            { isEmail: true },
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true

    },
    permission_id: {
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