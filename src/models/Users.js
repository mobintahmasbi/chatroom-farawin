import mongoose, { Schema } from "mongoose";
const userSchema= new Schema({
    name: {
        type:String,
        require :true,
        minLength: 3,
        maxLength:10
    },
    Phone_number:{
        type:String,
        require :true,
        minLength :11,
        maxLength :11,
        unique:true
    },
    path:String,
    password:{
        type:String,
        require :true,
        minLength :8,
        maxLength :46
    },
    contact:[
        {
        name: {
            type:String,
            require :true,
            minLength: 3,
            maxLength:10
        },
        Phone_number:{
            type:String,
            require :true,
            minLength :11,
            maxLength :11
        },
         path:String,
    }
    ]
})
export default  mongoose.model("User",userSchema)
