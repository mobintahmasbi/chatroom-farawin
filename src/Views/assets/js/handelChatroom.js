//////get of Server Account and Contacts
let fetchGetContact = async () => {
  let res = await fetch(`http://localhost:3000/api/v1/chatroom/contacts`);
  let contss = await res.json();
  return contss;
};

let getdb = async () => {
  let info = await fetchGetContact();
  userAccount = info.User;
  acconuntNumber = info.User.phone_number;
  accountContacts = info.contacts;
  console.log(info);

  starter.style.display = "flex";
  chatroom.style.display = "none";

  pvListGenerator(accountContacts);
};

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

/////add pv in listPv
let fetchSetContact = async () => {
  let temp22 = "";
  await fetch(`http://localhost:3000/api/v1/chatroom/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      ContactName: inputNameAdd.value,
      ContactPhoneNumber: inputNumberAdd.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      temp22 = data;
      console.log(data);
    });

  return temp22;
};

let adderNewContact = (nameval, numberval) => {
  let newContact = {
    Phone_number: numberval,
    name: nameval,
  };

  console.log(`name => ${inputNameAdd.value}
  number => ${inputNumberAdd.value}`);

  if (newContact) {
    let bolianRepeat = accountContacts.find((item) => {
      return item.number == newContact.Phone_number;
    });
    console.log(bolianRepeat);
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
    `contacts${acconuntNumber}`,
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
  console.log("generator");
  accountContacts.forEach((contact) => {
    newPvBoxDivElem = document.createElement("div");
    newPvBoxDivElem.classList = "pv";
    newPvBoxDivElem.setAttribute("value", `${contact.Phone_number}`);
    newPvBoxDivElem.setAttribute(
      "onclick",
      `openChatList(${contact.Phone_number})`
    );
    console.log(typeof contact.Phone_number);

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

    // newContact = "";
    newImageBoxDivElem.append(newcircleDiv);
    newInfoDiw.append(newTexname, newtexEndChat);
    newPvBoxDivElem.append(newImageBoxDivElem, newInfoDiw);
    pvlist.append(newPvBoxDivElem);
  });
};

let addHandeler = async () => {
  let enteredNameValue = inputNameAdd.value;
  let enteredNumberValue = inputNumberAdd.value;
  if (
    isNaN(inputNumberAdd.value) ||
    inputNumberAdd.value.length > 11 ||
    inputNumberAdd.value.length < 11
  ) {
    error.style.display = "flex";
    console.log("کمتر یا بیشتر از 11 کاراکتر و شامل حروف نباشد");
  } else {
    error.style.display = "none";
    let statusFetch = await fetchSetContact(); /////////////////////////////////////////////
    console.log(statusFetch);
    
    if (statusFetch.status) {
      adderNewContact(enteredNameValue, enteredNumberValue);
      console.log(typeof enteredNumberValue);
      console.log(statusFetch.msg);
    } else {
      console.log(statusFetch.msg);
    }
    closeWindowAddHandeler();
  }
  inputNumberAdd.value = "";
  inputNameAdd.value = "";
};

let closeWindowAddHandeler = () => {
  container.style.filter = "none";
  error.style.display = "none";
  containerAdd.style.display = "none";
  nameChange.style.display = "none";
  inputNameAdd.value = "";
  inputNumberAdd.value = "";
};

let butStartAddPvHandler = () => {
  containerAdd.style.display = "block";
  container.style.filter = "blur(10px)";
};
//////////rename///////////////////////////////////////////////////////////

let butStartRenameHandeler = () => {
  nameChange.style.display = "block";
  container.style.filter = "blur(10px)";
};
/////enter in chatList/////////////////////////////////////////////////////////////////////////////////

let openChatList = (s) => {
  console.log(s);
  pvActive = s;
  chats = "";

  starter.style.display = "none";
  chatroom.style.display = "flex";
  chatlist.innerHTML = "";

  getChatDB();
};

/////type chat and save in text
let addChathandler = (arreyChats) => {
  let newChatBoxDivElem, newSvgelem, newTexChatDivElem;
  chatlist.innerHTML = "";
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
    sender: `"${acconuntNumber}"`,
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
/////ButMenumore
function bodyhandeler() {
  if (menuMore.style.display == "flex") {
    menuMore.style.display = "none";
  }
}
