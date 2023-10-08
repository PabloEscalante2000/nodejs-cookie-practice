import express from 'express';
import cookieParser from 'cookie-parser';

const app = express()

app.use(cookieParser())

app.get("/",(req,res)=>{
    res.send("Hello world! 2")
})

app.get("/setcookie",(req,res)=>{
    res.cookie("my cookie name","mi cookie" , {
        maxAge: 99000,
        httpOnly:true,
        secure: true,
        sameSite:"lax"
    })
    res.send("Hello world! 2")
})

app.get("/getcookie",(req,res)=>{
    console.log(req.cookies)
    res.send("reading cookies")
})

app.get("/deletecookie",(req,res)=>{
    console.log(req.cookies)
    res.clearCookie("my cookie name")
    res.send("deleting cookies")
})

app.listen(3000)
console.log("server running on port 3000")