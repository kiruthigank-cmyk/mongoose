const exp=require("express")
const app=exp()
const bp=require("body-parser")
const urlencoder=bp.urlencoded({extended:false})
const mongoose=require("mongoose")
const User=require("./userModel")     //import
mongoose.connect("mongodb://127.0.0.1:27017/mykiru").then(()=>{
    console.log("connection success using mongodb lib")
}).catch(()=>{
    console.log("Error connection")
})
var result=""
app.post("/postdemo",urlencoder,(req,res)=>{
    var un=req.body.un
    var ag=req.body.ag
    var ad=req.body.addr
    result=result + res.write("<br>User Name:"+un+"<br>age:"+ag+"<br>address:"+ad)
    const myinp=new User({
    sname:un,
    age:ag,
    addr:ad
})
myinp.save().then(()=>{
    console.log(result+"success")
   
}).catch((err)=>{
    console.log("error:",err)
})
 res.write(result+"<h1>Successfully inserted</h1>")
    res.end()
}).listen(9223)
console.log("port listening @ 9223.......")