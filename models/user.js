const mongoose = require("mongoose")
const Room = require("./room")
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    connectionRequests: {
        type: Array,
    },
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"

        }
    ],
    rooms:[
        {
            type: Schema.Types.ObjectId,
            ref: "Room"
        }
    ]
 
});

const User = mongoose.model("User", userSchema)
module.exports = User
