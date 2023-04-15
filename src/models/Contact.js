import { Sequelize } from "sequelize";
import sq from "../boot/mysqlconnection.js";
const sequelize = sq();

const Contact = sequelize.define("contact", {
    path: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });

export default Contact