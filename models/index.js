const User = require("./user")
const Message = require("./message")
const Room = require("./room")


const db = {
    User: User,
    Message: Message,
    Room: Room
}

module.exports = db