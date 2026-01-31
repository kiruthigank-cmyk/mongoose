const exp=require("express")
const app=exp()
const mongoose=require("mongoose")
const User=require("./userModel")     //import

mongoose.connect("mongodb://127.0.0.1:27017/mykiru").then(()=>{
    console.log("connection success using mongodb lib")
}).catch(()=>{
    console.log("Error connection")
})
async function dis()
{
    try{
    const result=await User.find({sname:"kaviya"})
    console.log(result)
    }
    catch(e){
        console.log(message)
    }
}
dis()