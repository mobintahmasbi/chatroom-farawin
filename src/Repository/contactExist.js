
import User from "../models/Users.js";
async function contactExist(userPhoneNumber, ContactPhoneNumber){
    return{
        status:true,
        message:"this contact is exist"
    }
}
export default contactExist;