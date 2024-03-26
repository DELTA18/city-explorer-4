const mongoose = require('mongoose')
const hotel = mongoose.Schema(
    {
        id:{
            type:Number
        },
        name:{
            type:String
        },
        address:{
            type:String
        },
        city:{
            type:String
        },
        rating:{
            type:Number
        },
        type:{
            type:String
        },
        pricing:{
            type:Number
        },
        vejnonvej:{
            type:String
        },
        type2:{
            type:String
        },
        img_link:{
            type:String
        }
    }
)

const hotel_info = mongoose.model("hotels", hotel)

module.exports = hotel_info