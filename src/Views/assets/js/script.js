const butsend = document.querySelector('.send')
const inputchat = document.querySelector('.inputchat')
const addpv = document.querySelector('#add')
const butMore = document.querySelector('.iconMore')
const menuMore = document.querySelector('.menuMore')
const body = document.querySelector('body')

const containerAdd = document.querySelector('.containerAdd')
const container = document.querySelector('.container')
const closeWindowAdd = document.querySelector('.x')
const butsave = document.querySelector('.butsave')
const inputadd = document.querySelector('.inputadd')
const error = document.querySelector('.error')


/////type chat and save in text
butsend.addEventListener('click',()=>{
    console.log(inputchat.value);  
    inputchat.value = ''
})

/////add pv in listPv

let addHandeler = (event) =>{
    
    let val = inputadd.value
    console.log(val.length)
    if(isNaN(inputadd.value) || (val.length > 11 || val.length < 11)){
        error.style.display = 'flex'
    }else{
        error.style.display = 'none'
    }
    inputadd.value = ''    
}

addpv.addEventListener('click',()=>{
    containerAdd.style.display = "block"
    container.style.filter = "blur(10px)"
})
closeWindowAdd.addEventListener('click',()=>{
    containerAdd.style.display = "none"
    container.style.filter = "none"
    error.style.display = 'none'
    inputadd.value = ''    
})
butsave.addEventListener('click',addHandeler)
inputadd.addEventListener('keypress',(event)=>{
    if(event.charCode === 13){
        addHandeler()
    }
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

