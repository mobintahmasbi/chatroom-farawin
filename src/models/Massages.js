import mongoose, { Schema } from "mongoose";

const massageSchema=new  mongoose.Schema({

    writerName:{
        type:String,
        require :true,
        min :3,
        max:10,
    },
    sendTo:{
        type:String,
        require :true,
        min :3,
        max:10,
    },
    message: {
        type:String,
        require :true,
    },
    crateAt:{
        type:Date,
        immutible: true,
        default: new Date()
    }

})
export default  mongoose.model("Massage",massageSchema)