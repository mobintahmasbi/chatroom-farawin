import jwt from "jsonwebtoken";
import createmsgId from "../Services/createmsgId.js";
import creatMessages from "../Repository/creatMessages.js";
import getMessage from "../Repository/getMessage.js";

const privateKey = "aroosak ghashange man ghermez pooshide";

const pushMessage = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    const { recieverPhoneNumber, msgtxt} = req.body;
    if (token === undefined) {
      return res.status(403).send("you are not login!!!");
    }
    if (recieverPhoneNumber === undefined || msgtxt === undefined) {
      return res.status(400).send("you don't send any information");
    }
    const user = jwt.verify(token, privateKey);
    const ID = createmsgId(user.phoneNumber, recieverPhoneNumber);
    const creation = await creatMessages(
      user.phoneNumber,
      recieverPhoneNumber,
      msgtxt,
      ID
    );
    if (!creation.status) {
      return res.status(500).send("something bad happends please try later!!!");
    }
    return res.status(201).send({
      status: true,
    });
  } catch (e) {
    console.log(e.message);
    next(e);
  }
};

const pullMessage = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    const { firstTime, contactPhoneNumber, second} = req.body;
    if (token === undefined) {
      return res.status(403).send("you are not login!!!");
    }
    if(firstTime === undefined || contactPhoneNumber === undefined){
      return res.status(400).send("wrong information")
    }
    const user = jwt.verify(token, privateKey)
    const ID = createmsgId(user.phoneNumber, contactPhoneNumber)
    if(firstTime){
      const msgs = await getMessage(ID, !firstTime)
      if(!msgs.status){
        if(msgs.msg !== undefined){
          return res.send({
            status: true,
            messages: []
          })
        }
        return res.status(500).send({
          status: false,
          msg: "something bad happend please try later"
        })
      }
      return res.send({
        status: true,
        messages: msgs.messages
      })
    }
    const msgs = await getMessage(ID, !firstTime, second)
    if(!msgs.status){
      return res.send({
        status: false,
        msg: msgs.msg 
      })
    }
    
    return res.send({
      status: true,
      messages: msgs.messages
    }) 
  } catch (e) {
    console.log(e.message);
    next(e)
  }
};

export { pushMessage, pullMessage };
