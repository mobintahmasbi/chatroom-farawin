import User from "../models/Users.js";

async function getContacts(phoneNumber){
return {
        status:true,
        contacts:[
            {
                name: {
                    type:String,
                    require :true,
                    min: 3,
                    max:10
                },
                Phone_number:{
                    type:String,
                    require :true,
                    min :11,
                    max :11
                },
                path:String,
            }
        ]
        }
}
export default getContacts;