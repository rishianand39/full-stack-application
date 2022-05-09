const moongose = require("mongoose");

const connect=() =>{
    return  moongose.connect(
        'mongodb://rishianand:rishi123456@cluster0-shard-00-00.ulqvj.mongodb.net:27017,cluster0-shard-00-01.ulqvj.mongodb.net:27017,cluster0-shard-00-02.ulqvj.mongodb.net:27017/fullstack?ssl=true&replicaSet=atlas-awoqk8-shard-0&authSource=admin&retryWrites=true&w=majority'
    );
}


module.exports = connect;