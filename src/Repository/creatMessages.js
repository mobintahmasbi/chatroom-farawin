import massages from "../models/messages.js";

async function creatMessages(writerPhone, receiverPhone, message, ID){
 try {
     await massages.create({
         writer_phone: writerPhone,
         receiver_phone: receiverPhone,
         message: message,
         ID:ID
     })
     return {status: true}
 }
 catch (e){
     console.log(e.message)
     return {
        status: false
     }
 }
}

export default creatMessages