
const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const roomSchema = new Schema({
    participants: {
        type: Array
    },
    room_id:{
        type: Number
    },
    messages:[
        {
            type: Schema.Types.ObjectId,
            ref: "Message"
        }
    ]
});

const Room = mongoose.model("Room", roomSchema)
module.exports = Room