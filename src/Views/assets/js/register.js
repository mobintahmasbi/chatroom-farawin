const userName = document.getElementById("userName")
const phoneNumber = document.getElementById("phoneNumber")
const password = document.getElementById("password")
const Cpassword = document.getElementById("Cpassword")
const submit = document.getElementById("send")

submit.addEventListener("click", async (e) => {
    e.preventDefault();
    if(phoneNumber.value === "" || password.value === "" || userName.value === "" || password.value !== Cpassword.value){
        alert("لطفا تمام فیلد هارا به شکل صحیح پر کنید")
    }
    else {
        const answer = await fetch("http://localhost:3000/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          redirect: "follow",
          body: JSON.stringify({
            userName: userName.value,
            phoneNumber: phoneNumber.value,
            password: password.value,
          }),
        });
        if (answer.status === 500) {
          const formattedanswer = await answer.json();  
          alert(formattedanswer.msg);
        }
        if(answer.status === 201){
            const formattedanswer = await answer.json();
            alert(formattedanswer.msg);
            window.location.replace(formattedanswer.url)
            
        }
      }
})