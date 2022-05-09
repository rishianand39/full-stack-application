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



module.exports=app
