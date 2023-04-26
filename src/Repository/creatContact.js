import User from "../models/Users.js";


async function creatContact(phoneNumberU,phoneNumberC,nameC){
    try {

    const userLocal={
        name: await User.findOne({Phone_number: phoneNumber},{name:1}),
        phoneNumber:phoneNumberU,
    }
    const contactLocal={
        name:nameC,
        Phone_number:phoneNumberC

    }
       const contact=await User.findOne({Phone_number:phoneNumberC})
       const user = await User.findOne({Phone_number:phoneNumberU})
        await user.contact.push(contactLocal)
        await contact.contact.push(userLocal)
        return {
        status:true,
    }
    }
    catch (e) {
      return   e.message
    }
}
export default creatContact;