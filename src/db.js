import { Sequelize } from "sequelize"

const db = new Sequelize(
    "database",
    "user",
    "passw",
    {
        dialect: "sqlite",
        storage: 'src/bs.sqlite'
    }

)

export default db