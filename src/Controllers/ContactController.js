import jwt from "jsonwebtoken"
import getContacts from "../Repository/getContacts.js"

const privateKey = "aroosak ghashange man ghermez pooshide"

const getContactsC = async (req, res, next) => {
    const { token } = req.cookies
    if(token === undefined){
        return res.send("please login first")
    }
    const user = jwt.verify(token, privateKey)
    const userContacts = await getContacts(user.phoneNumber)
    if(!userContacts.status){
        return res.send("some thing bad happend please try again")
    }
    return res.send(userContacts.contacts) 
}



export {
    getContactsC
}
