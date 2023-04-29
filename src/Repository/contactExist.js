
import User from "../models/Users.js";
async function contactExist(userPhoneNumber, ContactPhoneNumber){
    try {
        const user = await User.findOne({Phone_number:userPhoneNumber})
        const contacts =user.contact;
        for (let i=0;i<contacts.length;i++){
            if (contacts[i].Phone_number===ContactPhoneNumber){
                return {
                    status:true
                }
            }
        }
        return {
            status:false
        }

    }
    catch (e){
        console.log(e.message)
    }
}

export default contactExist;