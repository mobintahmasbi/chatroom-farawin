import User from "../models/Users.js";

async function createUser(username, userpassword, phoneNumber,path) {
    try {
    const userInfo=   await User.create({
            name: username,
            password: userpassword,
            Phone_number: phoneNumber,
            path: path
        })
    return {
        status:true,
        message:"user creat successfully",
        userInfo
    }
    } catch (error) {
        console.log(error.message)
         return {
            status:false,
            message:"user creat unsuccessfully",
             userInfo:null
        }
    }
}

export default createUser