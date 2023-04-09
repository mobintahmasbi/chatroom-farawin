let $ = document ;
let login = document.querySelector('.login');
let create = document.querySelector('.create');
let container = document.querySelector('.container');

        //    login.onclick = function(){
            
        //        console.log('amirrrr');
        //        container.classList.add('signinForm');
        //    }
login.addEventListener("click" , (event) => {
    event.preventDefault();
    //console.log('amirrrrr');
    container.classList.add('signinForm');
});

create.addEventListener("click" , (event) => {
    event.preventDefault();
    //console.log('amirrrrr');
    container.classList.remove('signinForm');
});

