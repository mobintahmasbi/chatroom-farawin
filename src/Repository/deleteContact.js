import User from "../models/Users.js";

async function deletContact(UPhoneNumber, CPhoneNumber) {
  const userU = await User.findOne({ Phone_number: UPhoneNumber });
  const userC = await User.findOne({ Phone_number: CPhoneNumber });
  const contactsU = userU.contacts;
  const contactsC = userC.contacts;
  await contactsU.forEach(async (contact) => {
    if (contact.Phone_number === CPhoneNumber) {
      await contact.pull({ Phone_number: CPhoneNumber });
      await userU.save();
    }
  });
  await contactsC.forEach(async (contact) => {
    if (contact.Phone_number === UPhoneNumber) {
      await contact.pull({ Phone_number: UPhoneNumber });
      await userC.save()
      return {
        status:true
      };
    }
  });
  return {status:false}
}
