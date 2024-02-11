const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const studrouter = require("./controllers/StudentRouter")

//aliasname
const app=express()

//middleware
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://megeomonbabu:geo12345@cluster0.i1dx7ax.mongodb.net/collegedb?retryWrites=true&w=majority",{
    useNewUrlParser:true
})

//routing or api
app.use("/api/collegeadmin",studrouter)

app.listen(3001,()=>[
    console.log("server is running")
])