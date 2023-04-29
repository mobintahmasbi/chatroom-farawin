import User from "../models/Users.js";

async function getContacts(phoneNumber){
    try {

        const userr=  await User.findOne({Phone_number: phoneNumber})
        const contact =  userr.contact;
        return {
            status:true,
            contacts:contact
        }
    }
    catch (e){
        console.log(e.message)
        return {
            status: false
        } 
        
    }
}
export default getContacts;