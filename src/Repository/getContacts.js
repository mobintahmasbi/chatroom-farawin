import User from "../models/Users.js";
async function getContacts(phoneNumber){
    try {

        const userr=  await User.findOne({Phone_number: phoneNumber})
        const contact = await userr.contact;
        return {
            status:true,
            contacts:contact
        }
    }
    catch (e){
        return console.log(e.message)
    }
}
export default getContacts;