import mongoose, { Schema } from "mongoose";

const massageSchema=new  mongoose.Schema({

    writer_phone:{
        type:String,
        require :true,
        minLength :11,
        maxLength:11,
    },
    receiver_phone:{
        type:String,
        require :true,
        minLength :11,
        maxLength:11,
    },
    message: {
        type:String,
        require :true,
    },
    ID:{
        type:String,
        require:true

    },
    second:{
        type:Number,
        immutible: true,
        default: Date.now
    }
})
export default  mongoose.model("Massage",massageSchema)