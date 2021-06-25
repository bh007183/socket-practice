const express = require("express")
const app = express()
const path = require("path")
const mongoose = require("mongoose")
const cors = require("cors")

const PORT = process.env.PORT || 8090


app.use(cors())

app.use(express.urlencoded({extended: true}))
app.use(express.json())

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))
}
const messageRoute = require("./routes/message-routes")
app.use(messageRoute)



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/livechat",{
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false

})




app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "/client/build/index.html"))
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
    
})