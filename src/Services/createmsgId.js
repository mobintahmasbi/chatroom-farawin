export default function createmsgId(phoneNumber1 = "", phoneNumber2 = ""){
    
    let result = ""
    phoneNumber1 = phoneNumber1.substring(1, phoneNumber1.length)
    phoneNumber2 = phoneNumber2.substring(1, phoneNumber2.length)
    phoneNumber1 = phoneNumber1.split()
    phoneNumber2 = phoneNumber2.split()
    phoneNumber1.forEach(( V ,I ) => {
        let sum = parseInt(V) + parseInt(phoneNumber2[I])
        result = result + sum.toString()
    });
    return result
    
}