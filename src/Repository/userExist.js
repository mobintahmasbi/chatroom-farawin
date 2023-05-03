import User from "../models/Users.js";

async function userExist(phoneNumber){
   try {

    const userL = await User.findOne({Phone_number: phoneNumber})
    if (userL === null) {
        return {
            status: false
        }
    }
    else {
        return  {
            status: true,
            name :userL.name
        }
}
   }
   catch (e){console.log(e.message)
       return {
           status:false,
           message:"something bad happens"
       } }
}
export default userExist;