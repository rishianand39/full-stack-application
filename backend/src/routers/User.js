
const User = require("../models/User");
const CryptoJS=require("crypto-js")
const { verifyToken,verifyTokenAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
require('dotenv').config()
const router=require("express").Router();

// UPDATE USER
router.put("/:id",verifyTokenAuthorization,async(req,res)=>{
    if(req.body.password){
        req.body.password=CryptoJS.AES.encrypt(req.body.password, process.env.SEC_PASS ).toString();
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (err) {
    res.status(500).json(err);
    }
   
});

// DELETE USER
router.delete("/:id",verifyTokenAuthorization,async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id);

       return res.status(200).json("User has been deleted...")
    } catch (error) {
        return res.status(500).json(error)   
    }
});

// GET USER
router.get("/find/:id",verifyTokenAndAdmin,async(req,res)=>{
    try {
        const user= await User.findById(req.params.id);


        const {password, ...others}=user._doc;
       
        return res.status(200).json(others)

    } catch (error) {
        return res.status(500).json(error)   
    }
});

// GET ALL USERS
router.get("/",verifyTokenAndAdmin,async(req,res)=>{
     const query=req.query.new
    try {
        const users = query ?  await User.find().sort({_id :-1}).limit(5) :  await User.find();
      
        return res.status(200).json(users)

    } catch (error) {
        return res.status(500).json(error)   
    }
});

//GET USER STATS

router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  
    try {
      const data = await User.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports=router;