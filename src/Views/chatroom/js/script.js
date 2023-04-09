const butsend = document.querySelector('.send')
const inputchat = document.querySelector('.inputchat')
const addpv = document.querySelector('#add')
const butMore = document.querySelector('.iconMore')
const menuMore = document.querySelector('.menuMore')
const body = document.querySelector('body')

/////type chat and save in text
butsend.addEventListener('click',()=>{
    console.log(inputchat.value);  
    inputchat.value = ''
})

/////add pv in listPv
addpv.addEventListener('click',()=>{
    console.log('add');  
})

/////ButMenumore
function bodyhandeler(){
    if(menuMore.style.display == 'flex'){
        console.log('displaynone');
        menuMore.style.display = 'none'   
    }
}
function butMoreHandeler(event){
    body.removeEventListener('click',bodyhandeler)
    if(menuMore.style.display == 'none'){
        console.log('butclick troo');
        menuMore.style.display = 'flex'
        menuMore.style.top = event.layerY - 8 + 'px'
        menuMore.style.left = event.layerX  + 70 + 'px'
        
    }
    else{
        console.log('butclick fuls0');
        menuMore.style.display = 'none'
    }
    setTimeout(()=>{
        body.addEventListener('click',bodyhandeler)
    },100)   
}
butMore.addEventListener('click',butMoreHandeler)

/////

