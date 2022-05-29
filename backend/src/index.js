const express=require("express")
const app=express();
const cors = require('cors')

app.use(express.json())
const userRoute=require("./routers/User")
const authRoute=require("./routers/Auth")
const cartRoute=require("./routers/Cart")
const productRoute =require("./routers/Product")
const orderRoute =require("./routers/Order")
const stripeRoute=require("./routers/Stripe")
app.use(cors())

app.use("/api/auth",authRoute)
app.use("/api/user",userRoute);
app.use("/api/carts",cartRoute);
app.use("/api/products",productRoute);
app.use("/api/orders",orderRoute);
app.use("/api/checkout", stripeRoute);

app.get("/",(req,res)=>{
    return res.status(200).send("Full Stack Web Application")
})

const connect=require("./configs/db");
// const res = require("express/lib/response");



const port=process.env.PORT || 6000
app.listen(port,async()=>{
    try {
        await connect();
        console.log(`Listening on port ${port}`)
    } catch (error) {
        console.log({"error":error.message})
    }
});

