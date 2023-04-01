
//Dentro do model é configuração do banco

import { Sequelize } from "sequelize"
import db from "../db.js"

const User = db.define("user",{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

export default User