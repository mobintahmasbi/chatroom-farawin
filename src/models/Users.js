import mongoose, { Schema } from "mongoose";
const userSchema= new Schema({
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
        max :11,
        unique:true
    },
    path:String,
    password:{
        type:String,
        require :true,
        min :8,
        max :46
    },
    contact:[{
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
    }]
})
export default  mongoose.model("User",userSchema)
