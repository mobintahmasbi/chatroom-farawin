import Massage from "../models/messages.js";
//messageID   = last object message in chat
//if status = false: its means this is the first time
//if status = true : its means we need just last 5sec
async function getMessage(messageID,recSEC,status){
    try{
  const rec=recSEC-5
    if (status===true){const messages=await Massage.find({
        $and:[
            {ID:messageID},
            {second:{$gte:rec} }
        ]
    }
    )
    if (messages===null){
        return{
            status:false
        }
    }
    else return{
            status:true,
            messages:messages
        }
    }
    if (status===false){
        const messages=await Massage.find({ID:messageID})
        if (messages===null){
            return {status:false}
        }

       else return {
            status:true,
            messages:messages
        }
    }}
    catch (e) {
        console.log(e)
    }
}
export default getMessage