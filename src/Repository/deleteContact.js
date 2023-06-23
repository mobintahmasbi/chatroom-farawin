import User from "../models/Users.js";

async function deletContact(UPhoneNumber, CPhoneNumber) {

  try{
    const statusU = await User.updateOne(
      { Phone_number: UPhoneNumber },
      { $pull: { contact: { Phone_number:CPhoneNumber } } }
    )
    const statusC = await User.updateOne(
      { Phone_number: CPhoneNumber },
      { $pull: { contact: { Phone_number:UPhoneNumber } } }
    )
    console.log(statusC , statusU);
      return {status:true}

  }catch(e){
    console.log(e);
    return{status:false}
  }
  
}

export default deletContact