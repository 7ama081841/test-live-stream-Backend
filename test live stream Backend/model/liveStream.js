const mongoose = require("mongoose")

const liveStreamSchema = new mongoose.Schema({
    title: { type: String , required: true } ,
    description: { type: String , required: true }  , 
    user: { type: mongoose.Schema.Types.ObjectId , ref: "User" } ,
    likes: [ { type : mongoose.Schema.Types.ObjectId } ]
})

const LiveStream = mongoose.model( "LiveStream" , liveStreamSchema )

module.exports = LiveStream