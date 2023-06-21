import User from "../models/Users.js";

async function deletContact (UPhoneNumber,CPhoneNumber){

    const user = await User.findOne({Phone_number: UPhoneNumber})
    const contacts = user.contacts;
    await contacts.forEach(async (contact) =>{
        if (contact.Phone_number === CPhoneNumber) {
            await contact.pull({Phone_number:CPhoneNumber})
            await user.save()
            return {
                status: true
            }
        }
        
    })


}