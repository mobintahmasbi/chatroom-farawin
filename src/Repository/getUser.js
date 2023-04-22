import User from "../models/Users.js";
// this function get phone number and password and return an object
// the object has message property also has all contacts that user
// saved

async function getuser(phoneNumber, password) {
    try {
        const userL = await User.findOne({Phone_number: phoneNumber})
        if (userL === null) {
            return {
                status: false,
                message: "there is no user with this phone number",
            }
        } else if (userL.password === password) {
            return {
                contacts: userL.contact,
                Userinformation: {
                    userId: userL._id.toString(),
                    userName: userL.name,
                },
                message: "find user  successfully",
                status: true,
            }

        }
        return {
            status: false,
            message: "password is false",
        }
    }
    catch (e){console.log(e.message)
    return {
        status:false,
        message:"something bad happens"
    }
    }
}
export default getuser;
