const mongoose = require("mongoose")

const MarkSchema = new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"student"
        },
        subject1:{
            type:String,
            required:true
        },
        mark1:{
            type:String,
            required:true
        },
        
        subject2:{
            type:String,
            required:true
        },
        mark2:{
            type:String,
            required:true
        },
    
        subject3:{
            type:String,
            required:true
        },
        mark3:{
            type:String,
            required:true
        },
        subject4:{
            type:String,
            required:true
        },
        mark4:{
            type:String,
            required:true
        }
        ,
        subject5:{
            type:String,
            required:true
        },
        mark5:{
            type:String,
            required:true
        },
        addeddate:{
            type:Date,
            default:Date.now
        }
    }
)
module.exports = mongoose.model("marks",MarkSchema)