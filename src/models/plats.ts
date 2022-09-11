import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../config/database";
<<<<<<< HEAD
import { recettes } from './recipe';
 
=======

>>>>>>> d5234b34554868afec09acddde7c76d37a4490fb

export class plats extends Model {
    public id!: number;
    public menu!: string;

}
plats.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    menu: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
},
    {
        sequelize,
        timestamps: false,
    }

<<<<<<< HEAD
);
=======
);
>>>>>>> d5234b34554868afec09acddde7c76d37a4490fb
