
import User from "../models/Users.js";
async function findContacts(userPhoneNumber,ContactPhoneNumber){
    return{
        status:true,
        contactName:{
            type:String
        },
        contactNumber:String,
        contactPath:String
    }
}