const phoneNumber = document.getElementById("phoneNumber");
const password = document.getElementById("password");
const submit = document.getElementById("send");

submit.addEventListener("click", async (e) => {
  e.preventDefault();
  if (
    phoneNumber.value === "" ||
    password.value === "" ||
    phoneNumber.value.length !== 11
  ) {
    alert("لطفا شماره تلفن و پسورد خود را به شکل صحیح وارد کنید");
  } else {
    const answer = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      redirect: "follow",
      body: JSON.stringify({
        phoneNumber: phoneNumber.value,
        password: password.value,
      }),
    });
    if (answer.status === 500) {
      const formattedanswer = await answer.json();  
      alert(formattedanswer.msg);
    }
    if(answer.redirected === true){
        console.log(answer);
        window.location.replace(answer.url)
    }
  }
});
