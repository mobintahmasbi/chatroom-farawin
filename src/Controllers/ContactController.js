import jwt from "jsonwebtoken"
import getContacts from "../Repository/getContacts.js"
import contactExist from "../Repository/contactExist.js"
import creatContact from "../Repository/creatContact.js"

const privateKey = "aroosak ghashange man ghermez pooshide"

const getContactsC = async (req, res, next) => {
    try{
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
    }catch(e){
        console.log(e.message);
        next(e)
    }
}
const createNewContactC = async (req, res, next) => {
    const { token } = req.cookies
    const { ContactName, ContactPhoneNumber} = req.body
    if(token === undefined){
        return res.send({
            status: false
        })
    }
    const user = jwt.verify(token, privateKey)
    const existance = contactExist(user.phoneNumber, ContactPhoneNumber)
    if(existance.status){
        return res.send({
            status: false,
            msg: "مخاطب مورد نظر یافت نشد."
        })
    }
    const creation = await creatContact(user.phoneNumber, ContactPhoneNumber, ContactName)
    if(!creation.status){
        return res.send({
            status: false,
            msg: "مشکلی پیش آمده لطفا دوباره تلاش کنید"
        })
    }
    return res.status(201).send({
        status: true,
        msg: "مخاطب مورد نظر با موفقیت اضافه شد"
    })
}


export {
    getContactsC,
    createNewContactC
}
