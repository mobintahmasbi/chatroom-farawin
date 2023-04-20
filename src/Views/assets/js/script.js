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
const inputadd = document.querySelector(".inputadd");
const error = document.querySelector(".error");
const chatlist = document.querySelector("#chatlist");
const ssvg = document.querySelector("#ssvg");
const pv = document.getElementsByClassName("pv");
const pvlist = document.querySelector(".pvlist");

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
];

/////enter in chatList

let openChatList = (s) => {
  console.log(s);
};

/////type chat and save in text

let addLocalStorage = (chats) => {
  localStorage.setItem(`chats ${"d5"}`, JSON.stringify(chats));
};

let addChathandler = (arreyChats) => {
  let newChatBoxDivElem, newSvgelem, newTexChatDivElem;

  arreyChats.forEach((element) => {
    newChatBoxDivElem = document.createElement("div");
    newChatBoxDivElem.classList = "texchat to";

    newTexChatDivElem = document.createElement("div");
    newTexChatDivElem.innerHTML = element.tex;

    newSvgelem = document.createElement("svg");
    newSvgelem.setAttribute("viewBox", "0 0 48 48");
    newSvgelem.setAttribute("fill", "currentColor");
    newSvgelem.setAttribute("style", "color: aliceblue;width:22px;");
    newSvgelem.innerHTML = `<svg viewBox="0 0 48 48" fill="currentColor" style="color: aliceblue;width:22px;padding-top: 8px;" id="ssvg">
        <path d="M12.5,36a1.5,1.5,0,0,1-1.061-.439L1.379,25.5,3.5,23.379l8.9,8.9L33.316,7.387l2.3,1.929L13.648,35.465A1.5,1.5,0,0,1,12.565,36Z"></path>
        <path d="M45.316,7.387,24.4,32.282l-2.972-2.973-1.937,2.306,3.945,3.946A1.5,1.5,0,0,0,24.5,36h.065a1.5,1.5,0,0,0,1.083-.534L47.613,9.316Z"></path>
        </svg>`;

    newChatBoxDivElem.append(newTexChatDivElem, newSvgelem);
  });
  chatlist.append(newChatBoxDivElem);
};

let addChat = () => {
  console.log(inputchat.value);
  let chat = {
    tex: `${inputchat.value}`,
    status: "sent",
  };

  chats.push(chat);
  addLocalStorage(chats);
  addChathandler(chats);
  inputchat.value = "";
};

/////add pv in listPv
pvlist.innerHTML = "";
let adderContact = (enteredValue) => {
  let newPvBoxDivElem,
    newImageBoxDivElem,
    newcircleDiv,
    newInfoDiw,
    newTexname,
    newtexEndChat;

  let newContact = contactsGlobal.find((item) => {
    return item.number == enteredValue;
  });

  newPvBoxDivElem = document.createElement("div");
  newPvBoxDivElem.classList = "pv";
  newPvBoxDivElem.setAttribute("value", `${newContact.name}`);
  newPvBoxDivElem.setAttribute('onclick','openChatList(' + 'newContact.name' + ')');

  newImageBoxDivElem = document.createElement("div");
  newImageBoxDivElem.classList = "imageprofile";

  newcircleDiv = document.createElement("div");
  newcircleDiv.classList = "circle";

  newInfoDiw = document.createElement("div");
  newInfoDiw.classList = "infoprofile";

  newTexname = document.createElement("div");
  newTexname.classList = "tex";
  newTexname.innerHTML = `${newContact.name}`;

  newtexEndChat = document.createElement("div");
  newtexEndChat.classList = "tex t";
  newtexEndChat.innerHTML = "آخرین بیام";

  newContact = "";
  newImageBoxDivElem.append(newcircleDiv);
  newInfoDiw.append(newTexname, newtexEndChat);
  newPvBoxDivElem.append(newImageBoxDivElem, newInfoDiw);
  console.log(newPvBoxDivElem);
  pvlist.append(newPvBoxDivElem);
};

let addHandeler = () => {
  let enteredValue = inputadd.value;
  console.log(enteredValue.length);
  if (
    isNaN(inputadd.value) ||
    enteredValue.length > 11 ||
    enteredValue.length < 11
  ) {
    error.style.display = "flex";
  } else {
    error.style.display = "none";
    adderContact(enteredValue);
    closeWindowAddHandeler();
  }
  inputadd.value = "";
};

let closeWindowAddHandeler = () => {
  container.style.filter = "none";
  error.style.display = "none";
  containerAdd.style.display = "none";
  inputadd.value = "";
};

let butStartAddPvHandler = () => {
  containerAdd.style.display = "block";
  container.style.filter = "blur(10px)";
};

/////ButMenumore
function bodyhandeler() {
  if (menuMore.style.display == "flex") {
    menuMore.style.display = "none";
  }
}

function butMoreHandeler(event) {
  body.removeEventListener("click", bodyhandeler);
  if (menuMore.style.display == "none") {
    menuMore.style.display = "flex";
    menuMore.style.top = event.layerY - 8 + "px";
    menuMore.style.left = event.layerX + 70 + "px";
  } else {
    menuMore.style.display = "none";
  }
  setTimeout(() => {
    body.addEventListener("click", bodyhandeler);
  }, 100);
}

////////////////////////////
butMore.addEventListener("click", butMoreHandeler);
butsend.addEventListener("click", addChat);
inputadd.addEventListener("keypress", (event) => {
  if (event.charCode === 13) {
    addHandeler();
  }
});
inputchat.addEventListener("keypress", (event) => {
  if (event.charCode === 13) {
    addChat();
  }
});
// pv.addEventListener('click',openChatList)
butStartAddPv.addEventListener("click", butStartAddPvHandler);
closeWindowAdd.addEventListener("click", closeWindowAddHandeler);
// butSaveContact.addEventListener("click", addHandeler);
butSaveContact.setAttribute("onclick", 'addHandeler(2)');