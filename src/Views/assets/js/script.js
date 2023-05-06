const butsend = document.querySelector(".send");
const inputchat = document.querySelector(".inputchat");
const butStartAddPv = document.querySelector("#add");
const butMore = document.querySelector(".iconMore");
const menuMore = document.querySelector(".menuMore");
const body = document.querySelector("body");
const containerAdd = document.querySelector(".containerAdd");
const container = document.querySelector(".container");
const closeWindowAdd = document.querySelector(".x");
const butSaveContact = document.querySelector(".butsave");
const inputNameAdd = document.querySelector("#inputNameAdd");
const inputNumberAdd = document.querySelector("#inputNumberAdd");
const error = document.querySelector(".error");
const chatlist = document.querySelector("#chatlist");
const chatroom = document.querySelector("#chatroom");
const ssvg = document.querySelector("#ssvg");
const pv = document.getElementsByClassName("pv");
const pvlist = document.querySelector(".pvlist");
const starter = document.querySelector(".starter");
const nameChange = document.querySelector("#nameChange")
const butStartRename = document.querySelector(".rename")

let userAccount = {};
let acconuntNumber = null;
let pvActive = "";
let chats = [];
let accountContacts = [];
let contactsGlobal = [
  {
    number: 09153110397,
    name: "sajad",
  },
  {
    number: 09156210397,
    name: "zahra",
  },
  {
    number: 09392830169,
    name: "omid",
  },
  {
    number: 09035083850,
    name: "omid",
  },
];

////////////////////////////
butMore.addEventListener("click", butMoreHandeler);
butsend.addEventListener("click", addChat);
inputNumberAdd.addEventListener("keypress", (event) => {
  if (event.charCode === 13) {
    addHandeler();
  }
});
inputchat.addEventListener("keypress", (event) => {
  if (event.charCode === 13) {
    addChat();
  }
});
butStartRename.addEventListener("click", butStartRenameHandeler)
butStartAddPv.addEventListener("click", butStartAddPvHandler);
closeWindowAdd.addEventListener("click", closeWindowAddHandeler);
butSaveContact.addEventListener("click", addHandeler);
window.addEventListener("load", getdb);
