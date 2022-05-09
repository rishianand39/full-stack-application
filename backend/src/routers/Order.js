

const router=require("express").Router();


const Order = require("../models/Order");
const { verifyToken,verifyTokenAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

// CREATE ORDER
router.post("/",verifyToken,async(req,res)=>{
    const newOrder=new Order(req.body);
    try {
        const savedOrder=await newOrder.save();
        return res.status(200).json(savedOrder)
        
    } catch (error) {
        return res.status(500).json(error)
    }
})

// // UPDATE ORDER
router.put("/:id",verifyTokenAndAdmin,async(req,res)=>{

    try {
        const updatedOrder = await Order.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
       return res.status(200).json(updatedOrder);
    } catch (err) {
       return res.status(500).json(err);
    }
   
});

// DELETE ORDER
router.delete("/:id",verifyTokenAndAdmin,async(req,res)=>{
    try {
        await Order.findByIdAndDelete(req.params.id);

       return res.status(200).json("Order has been deleted...")
    } catch (error) {
        return res.status(500).json(error)   
    }
});

// GET USER ORDER
router.get("/find/:userId",verifyTokenAuthorization, async(req,res)=>{
    try {
        const order= await Order.find({userId:req.params.userId});

        return res.status(200).json(order)

    } catch (error) {
        return res.status(500).json(error)   
    }
});

// GET ALL ORDER
router.get("/",verifyTokenAndAdmin, async(req,res)=>{

    try {
        let order=await Order.find();
        return res.status(200).json(order)

    } catch (error) {
        return res.status(500).json(error)   
    }
});

// GET MONTHLY INCOME

router.get("/income",verifyTokenAndAdmin,async(req,res)=>{
    const date=new Date();
    const lastMonth=new Date(date.setMonth(date.getMonth()-1))
    const previousMonth=new Date(new Date().setMonth(lastMonth.getMonth()-1))

    try {
        const income=await Order.aggregate([
            {$match:{createdAt:{$gte:previousMonth}}},
            {
                $project:{
                  month:  {$month:"$createdAt"},
                  sales:  "$amount"
                },
               
            },
            {
                $group:{
                    _id:"$month",
                    total:{$sum:"$sales"}
                }
            },
        ]);
        return res.status(200).json(income)
    } catch (error) {
        return res.status(500).json(error)
    }
})





module.exports=router;