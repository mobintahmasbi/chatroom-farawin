
import User from "../models/Users.js";
async function contactExist(userPhoneNumber, ContactPhoneNumber){
    try {
        const user = await User.findOne({Phone_number:userPhoneNumber})
        const contact=await  user.findOne({'user.contact.Phone_number':{$elemMatch:ContactPhoneNumber}},function (err, contact) {

            if (err){
                return {
                status: false,
                message:err.message
                }
            }

            if (contact) {
               return {
               status:true,
               message: "the contact is exist"
               }
            }


        else {
              return {
              status: false,
              message: "the contact is not exist"
              }
            }

        }
        )}
    catch (e){
        console.log(e.message)
    }
}

export default contactExist;