

const router=require("express").Router();


const Cart = require("../models/Cart");
const { verifyToken,verifyTokenAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

// CREATE PRODUCT
router.post("/",verifyToken,async(req,res)=>{
    const newCart=new Cart(req.body);
    try {
        const savedCart=await newCart.save();
        return res.status(200).json(savedCart)
        
    } catch (error) {
        return res.status(500).json(error)
    }
})

// // UPDATE PRODUCT
router.put("/:id",verifyTokenAuthorization,async(req,res)=>{

    try {
        const updatedCart = await Cart.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
       return res.status(200).json(updatedCart);
    } catch (err) {
       return res.status(500).json(err);
    }
   
});

// DELETE PRODUCT
router.delete("/:id",verifyTokenAuthorization,async(req,res)=>{
    try {
        await Cart.findByIdAndDelete(req.params.id);

       return res.status(200).json("Cart has been deleted...")
    } catch (error) {
        return res.status(500).json(error)   
    }
});

// GET USER CART
router.get("/find/:userId",verifyTokenAuthorization, async(req,res)=>{
    try {
        const cart= await Cart.findOne({userId:req.params.userId});

        return res.status(200).json(cart)

    } catch (error) {
        return res.status(500).json(error)   
    }
});

// GET ALL CART
router.get("/",verifyTokenAndAdmin, async(req,res)=>{

    try {
        let carts=await Cart.find();
        return res.status(200).json(carts)

    } catch (error) {
        return res.status(500).json(error)   
    }
});





module.exports=router;