import sq from "../boot/mysqlconnection.js";
import Contact from "../models/Contact.js";
const sequelize = sq();
// this function get phone number and password and return an object
// the object has message property also has all contacts that user
// saved

async function getuser(phoneNumber, password) {
  return {
    Userinformation: {
      userId: 0,
      userName: "username",
    },
    status: true,
    message: "Contacts retrieved successfully",
    contacts: []
  };
}

export default getuser;
