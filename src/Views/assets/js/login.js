const phoneNumber = document.getElementById("phoneNumber")
const password = document.getElementById("password")
const submit = document.getElementById("send")

submit.addEventListener("click", (e) => {
    if(phoneNumber.value === "" || password.value === "" || phoneNumber.value.length !== 11){
        e.preventDefault();
        alert("لطفا شماره تلفن و پسورد خود را وارد کنید")
    }
})



