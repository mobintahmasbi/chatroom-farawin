let $ = document ;
let login = $.querySelector('.login');
let create = $.querySelector('.create');
let container = $.querySelector('.container');

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

