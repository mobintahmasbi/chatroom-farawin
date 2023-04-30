import User from "../models/Users.js";


async function creatContact(phoneNumberU,phoneNumberC,nameC){
    try {
        const userlname =await User.findOne({Phone_number: phoneNumberU})
        const userLocal={
            name: userlname.name,
            Phone_number:phoneNumberU
        }
        console.log(userLocal)
        const contactLocal={
            name:nameC,
            Phone_number:phoneNumberC
        }
        console.log(contactLocal)
        const contact=await User.findOne({Phone_number:phoneNumberC})
        const user = await User.findOne({Phone_number:phoneNumberU})
        await user.contact.push(contactLocal)
        await contact.contact.push(userLocal)
        await user.save()
        await contact.save()
        return {
            status:true,
        }
    }
    catch (e) {
        return  {
            status: false,
            message: e.message
        }
    }
}
export default creatContact;