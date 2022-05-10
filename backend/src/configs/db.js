const moongose = require("mongoose");
require('dotenv').config()


const connect=() =>{
    return  moongose.connect(
        process.env.MONGO_URL
    );
}


module.exports = connect;