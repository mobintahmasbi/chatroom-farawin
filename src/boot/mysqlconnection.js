import Sequelize from "sequelize";
import dotenv from "dotenv"
dotenv.config()
const { DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_HOST } = process.env
console.log(DATABASE_NAME, DATABASE_USERNAME);
const sequelize = () => {
    return new Sequelize(DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {
        host: DATABASE_HOST,
        dialect: "mysql",
      });
}
export default sequelize