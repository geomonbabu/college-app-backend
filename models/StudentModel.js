const mongoose = require("mongoose")

const StudSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        age:{
            type:String,
            required:true
        },
        phonenumber:{
            type:String,
            required:true
        },
        batch:{
            type:String,
            required:true
        },
        joinyear:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        emailid:{
            type:String,
            required:true
        },
        admno:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }   
    }
)
module.exports = mongoose.model("student",StudSchema)