import mongoose, { Schema } from "mongoose";

const massageSchema=new  mongoose.Schema({

    writer_phone:{
        type:String,
        require :true,
        min :11,
        max:11,
    },
    receiver_phone:{
        type:String,
        require :true,
        min :11,
        max:11,
    },
    message: {
        type:String,
        require :true,
    },
    ID:{
        type:String,
        require:true

    },
    crateAt:{
        type:Date,
        immutible: true,
        default: new Date()
    },
    second:{
        type:Number,
        immutible: true,
        default: new Date().getSeconds()
    }
})
export default  mongoose.model("Massage",massageSchema)