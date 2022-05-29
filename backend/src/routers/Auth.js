
const router=require("express").Router();
const User=require("../models/User")
const CryptoJS=require("crypto-js")
const jwt=require("jsonwebtoken")
require('dotenv').config()


//Router

router.post("/register",async(req,res)=>{
    try {
        const newUser=new User({
            username:req.body.username,
            email:req.body.email,
            password:CryptoJS.AES.encrypt(req.body.password, "rishi").toString(),
        })
        const savedUser=await newUser.save();
       return res.status(200).json(savedUser)
    } catch (error) {
      return  res.status(500).json(error)
    }
})


router.post("/login",async(req,res)=>{
    try {
        const user=await User.findOne({username:req.body.username});

        if(!user){
            return res.status(401).json("wrong credential")
        }

        const hashedPassword=CryptoJS.AES.decrypt(user.password,"rishi");

        
        const originalPassword=hashedPassword.toString(CryptoJS.enc.Utf8)

        if(originalPassword!==req.body.password){
            return res.status(401).json("wrong credential")
        }

        const accessToken=jwt.sign({
            id:user._id,
            isAdmin:user.isAdmin
        },"rishi",{expiresIn:"3d"})
        
        const {password, ...others}=user._doc;
       
        return res.status(200).json({...others,accessToken})

    } catch (error) {
      return res.status(500).json(error)  
    }
})


module.exports=router;