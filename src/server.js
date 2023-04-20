import * as dotenv from "dotenv"
dotenv.config();
import app from "./index.js";
import sequelize from "./boot/mysqlconnection.js";



const sq = sequelize()
try {
    await sq.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
}

app.listen(process.env.SERVER_PORT , () => {
    console.log(`server is running on port ${process.env.SERVER_PORT}`);
})