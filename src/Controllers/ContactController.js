import jwt from "jsonwebtoken"
import getContacts from "../Repository/getContacts.js"

const privateKey = "aroosak ghashange man ghermez pooshide"

const getContactsC = async (req, res, next) => {
    const { token } = req.cookies
    if(token === undefined){
        return res.send({
            status: false
        })
    }
    const user = jwt.verify(token, privateKey)
    const userContacts = await getContacts(user.phoneNumber)
    if(!userContacts.status){
        return res.send("some thing bad happend please try again")
    }
    return res.send({
        status: true,
        User:{
            phone_number: user.phoneNumber,
            password: user.password
        },
        contacts: userContacts.contacts
    }) 
}



export {
    getContactsC
}
