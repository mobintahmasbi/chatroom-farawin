import User from "../models/Users.js";

async function userExist(phoneNumber){
    const userL = await User.findOne({Phone_number: phoneNumber})
    if (userL === null) {
        return {
            status: false
        }
    }
    else {
        return  {
            status: true
        }
}
}
export default userExist;