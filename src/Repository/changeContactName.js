import User from "../models/Users.js";

async function changeContactName(UPhoneNumber,CPhoneNumber,NewName){
    async function changeContactName(UPhoneNumber,CPhoneNumber,NewName){
        try {
            const user = await User.findOne({Phone_number: UPhoneNumber})
            const contacts = user.contact;
            for (let i = 0; i < contacts.length; i++) {
                if (contacts[i].Phone_number === CPhoneNumber) {
                    await contacts[i].set({name:NewName})
                    await user.save()
                    return {
                        status: true
                    }
                }
            }
            return {status:false}
        }
        catch (e){console.log(e.message)}
    }

}