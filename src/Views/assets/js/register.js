const userName = document.getElementById("userName")
const phoneNumber = document.getElementById("phoneNumber")
const password = document.getElementById("password")
const Cpassword = document.getElementById("Cpassword")
const submit = document.getElementById("send")

submit.addEventListener("click", (e) => {
    if(phoneNumber.value === "" || password.value === "" || userName.value === "" || password.value !== Cpassword.value){
        e.preventDefault();
        alert("لطفا تمام فیلد هارا به شکل صحیح پر کنید")
    }
})