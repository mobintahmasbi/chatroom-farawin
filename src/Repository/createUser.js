import mongoose, from "mongoose";
import User from "../models/Users.js";
async function createUser(userName, userPassword, phoneNumber,path) {
    try {
    const userInfo=   await User.create({
            name: userName,
            password: userPassword,
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