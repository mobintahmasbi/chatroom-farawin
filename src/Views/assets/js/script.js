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
const chatroom = document.querySelector("#chatroom");
const ssvg = document.querySelector("#ssvg");
const pv = document.getElementsByClassName("pv");
const pvlist = document.querySelector(".pvlist");
const starter = document.querySelector(".starter");

let acconuntName = "Omid";
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

let pvActive = "";

/////type chat and save in text

let addChathandler = (arreyChats) => {
  let newChatBoxDivElem, newSvgelem, newTexChatDivElem;
  chatlist.innerHTML = ''
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
    chatlist.append(newChatBoxDivElem);
  });
};

let addChat = () => {
  let chat = {
    tex: `${inputchat.value}`,
    status: "sent",
    sender: `"${acconuntName}"`,
  };

  chats.push(chat);

  addChathandler(chats);

  setChatDB(chats);

  inputchat.value = "";
};

let setChatDB = (chats) => {
  localStorage.setItem(`chats${pvActive}`, JSON.stringify(chats));
};
let getChatDB = () => {
  let chatData = JSON.parse(localStorage.getItem(`chats${pvActive}`));

  if (chatData) {
    chats = chatData;
  } else {
    chats = [];
  }

  addChathandler(chats);
};

/////enter in chatList

let openChatList = (s) => {
  console.log(s);
  pvActive = s;
  chats = "";

  starter.style.display = "none";
  chatroom.style.display = "flex";
  chatlist.innerHTML = "";

  getChatDB();
};

/////add pv in listPv
pvlist.innerHTML = "";

let adderNewContact = (enteredValue) => {
  let newContact = contactsGlobal.find((item) => {
    return item.number == enteredValue;
  });

  if (newContact) {
    let bolianRepeat = accountContacts.find((item) => {
      return item.number == newContact.number;
    });

    if (bolianRepeat) {
      console.log("repead");
    } else {
      accountContacts.push(newContact);

      setDB(accountContacts);

      pvListGenerator(accountContacts);
    }

    bolianRepeat = "";
  } else {
    console.log("na Mojod");
  }
};

let setDB = (accountContacts) => {
  localStorage.setItem(
    `contacts${acconuntName}`,
    JSON.stringify(accountContacts)
  );
};

let pvListGenerator = (accountContacts) => {
  let newPvBoxDivElem,
    newImageBoxDivElem,
    newcircleDiv,
    newInfoDiw,
    newTexname,
    newtexEndChat;

  pvlist.innerHTML = "";

  accountContacts.forEach((contact) => {
    newPvBoxDivElem = document.createElement("div");
    newPvBoxDivElem.classList = "pv";
    newPvBoxDivElem.setAttribute("value", `${contact.number}`);
    newPvBoxDivElem.setAttribute("onclick", `openChatList(${contact.number})`);

    newImageBoxDivElem = document.createElement("div");
    newImageBoxDivElem.classList = "imageprofile";

    newcircleDiv = document.createElement("div");
    newcircleDiv.classList = "circle";

    newInfoDiw = document.createElement("div");
    newInfoDiw.classList = "infoprofile";

    newTexname = document.createElement("div");
    newTexname.classList = "tex";
    newTexname.innerHTML = `${contact.name}`;

    newtexEndChat = document.createElement("div");
    newtexEndChat.classList = "tex t";
    newtexEndChat.innerHTML = "آخرین بیام";

    newContact = "";
    newImageBoxDivElem.append(newcircleDiv);
    newInfoDiw.append(newTexname, newtexEndChat);
    newPvBoxDivElem.append(newImageBoxDivElem, newInfoDiw);
    pvlist.append(newPvBoxDivElem);
  });
};

let addHandeler = () => {
  let enteredValue = inputadd.value;

  if (
    isNaN(inputadd.value) ||
    enteredValue.length > 11 ||
    enteredValue.length < 11
  ) {
    error.style.display = "flex";
  } else {
    error.style.display = "none";

    adderNewContact(enteredValue);
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

let getdb = () => {
  let dbPvlist = JSON.parse(localStorage.getItem(`contacts${acconuntName}`));
  starter.style.display = "flex";
  chatroom.style.display = "none";
  console.log(starter);

  if (dbPvlist) {
    accountContacts = dbPvlist;
  } else {
    accountContacts = [];
  }

  pvListGenerator(accountContacts);
};
// pv.addEventListener('click',openChatList)
butStartAddPv.addEventListener("click", butStartAddPvHandler);
closeWindowAdd.addEventListener("click", closeWindowAddHandeler);
butSaveContact.addEventListener("click", addHandeler);
// butSaveContact.setAttribute("onclick", 'addHandeler(2)');
window.addEventListener("load", getdb);
