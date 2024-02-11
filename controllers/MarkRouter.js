const express = require("express")
const router = express.Router()
const markmodel = require("../models/MarkModel")

//addmark
router.post("/addmarks",async(req,res)=>{
    let data = req.body
    let marks = new markmodel(data)
    let result = await marks.save()
    res.json({
        staus:"success"
    })
})

//viewmarks of all students from admin side
router.get("/viewmarks",async(req,res)=>{
    let output = await markmodel.find()
    .populate("userId","name admno batch joinyear -_id")
    .exec()
    res.json({
        output
    })

})
router.post("/mymarks",async(req,res)=>{
    let data = req.body
    console.log(data)
    let output = await markmodel.find(data)
    res.json(
        output
    )
})

module.exports=router
