import jwt from "jsonwebtoken";
import getContacts from "../Repository/getContacts.js";
import contactExist from "../Repository/contactExist.js";
import creatContact from "../Repository/creatContact.js";
import changeContactName from "../Repository/changeContactName.js";

const privateKey = "aroosak ghashange man ghermez pooshide";

const getContactsC = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (token === undefined) {
      return res.send({
        status: false,
      });
    }
    const user = jwt.verify(token, privateKey);
    const userContacts = await getContacts(user.phoneNumber);
    if (!userContacts.status) {
      return res.send("some thing bad happend please try again");
    }
    return res.send({
      status: true,
      User: {
        phone_number: user.phoneNumber,
        password: user.password,
      },
      contacts: userContacts.contacts,
    });
  } catch (e) {
    console.log(e.message);
    next(e);
  }
};
const createNewContactC = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    const { ContactName, ContactPhoneNumber } = req.body;
    if (token === undefined) {
      return res.send({
        status: false,
      });
    }
    const user = jwt.verify(token, privateKey);
    const existance = await contactExist(user.phoneNumber, ContactPhoneNumber);
    if (existance.status) {
      return res.send({
        status: false,
        msg: "مخاطب مورد نظر یافت نشد.",
      });
    }
    const creation = await creatContact(
      user.phoneNumber,
      ContactPhoneNumber,
      ContactName
    );
    if (!creation.status) {
      return res.send({
        status: false,
        msg: "مشکلی پیش آمده لطفا دوباره تلاش کنید",
      });
    }
    return res.status(201).send({
      status: true,
      msg: "مخاطب مورد نظر با موفقیت اضافه شد",
    });
  } catch (e) {
    next(e);
  }
};

const changeNameContact = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    const { ContactNewName, ContactPhoneNumber } = req.body;
    if (token === undefined) {
      return res.send({
        status: false,
        msg: "user doesn't login !!!",
      });
    }
    if (ContactPhoneNumber === undefined || ContactNewName === undefined) {
      return res.send({
        status: false,
        msg: "wrong information!!!",
      });
    }
    const user = jwt.verify(token, privateKey);
    const existance = await contactExist(user.phoneNumber, ContactPhoneNumber);
    if (!existance.status) {
      return res.send({
        status: false,
        msg: "مخاطب مورد نظر یافت نشد.",
      });
    }
    const changerstat = await changeContactName(
      user.phoneNumber,
      ContactPhoneNumber,
      ContactNewName
    );
    if (!changerstat) {
      return res.send({
        status: false,
        msg: "مشکلی پیش آمده لطفا دوباره تلاش کنید.",
      });
    }
    return res.send({
      status: true,
      msg: "نام کاربر با موفقیت تغییر کرد",
    });
  } catch (e) {
    next(e);
  }
};

const deleteContactsC = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (token === undefined) {
      return res.send({
        status: false,
        msg: "user doesn't login !!!",
      });
    }

    const { ContactPhoneNumber } = req.body;
    if (ContactPhoneNumber === undefined) {
      return res.send({
        status: false,
        msg: "wrong information!!!",
      });
    }
    const user = jwt.verify(token, privateKey);
    const existance = await contactExist(user.phoneNumber, ContactPhoneNumber);
    if (!existance.status) {
      return res.send({
        status: false,
        msg: "مخاطب مورد نظر یافت نشد.",
      });
    }
    const deleteStat = await deletContact(user.phoneNumber, ContactPhoneNumber);
    if (!deleteStat) {
      return res.send({
        status: false,
        msg: "مشکلی پیش آمده لطفا دوباره تلاش کنید.",
      });
    }
    return res.send({
      status: true,
      msg: "کاربر با موفقیت محو شد",
    });
  } catch (e) {
    console.log(e.message);
  }
};

export { getContactsC, createNewContactC, changeNameContact , deleteContactsC};
