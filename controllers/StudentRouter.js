const express = require("express")
const router = express.Router()
const studmodel = require("../models/StudentModel")
const bcrypt = require("bcryptjs")

HashGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/addstudent",async(req,res)=>{
    let { data } = {"data":req.body}
    let password = data.password
    let enpassword = data.password
    const hashedPassword=await HashGenerator(password)
    data.password=hashedPassword
    let blog = new studmodel(data)
            let result = blog.save()
                 res.json({
                 status:"success"
                }
                )
                console.log(data)
                console.log(enpassword)
})
router.get("/viewstudent",async(req,res)=>{
    let output = await studmodel.find()
    res.json(
        output
    )
})
router.post("/studentlogin",async(req,res)=>{
    let data = req.body
    let admisno = req.body.admno
    let input = await studmodel.findOne({"admno" : admisno})
    if(!input){
        return res.json({
            status:"invalid email"
        })
    }
    else{
        console.log(input)
        let dbpass = input.password
        let inputpass = req.body.password
        console.log(dbpass)
        console.log(inputpass)
        const match = await bcrypt.compare(inputpass,dbpass)
        if(!match){
            return res.json({
                status:"incorrect password"
            })
        }
        else{
            res.json({
                status:"success",userdata:input,
            })
        }
    }
})
module.exports=router