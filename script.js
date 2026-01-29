const mongoose=require("mongoose")
const User=require("./userModel")     //import
mongoose.connect("mongodb://127.0.0.1:27017/mykiru").then(()=>{
    console.log("connection success using mongodb lib")
}).catch(()=>{
    console.log("Error connection")
})
const myinp=new User({
    sname:"kaviya",
    age:25,
    city:"erode",
    addr:"04,omandhur"
})
myinp.save().then(()=>{
    console.log("success")
}).catch((err)=>{
    console.log("error:",err)
})