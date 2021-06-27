const express = require("express")
const app = express()
const path = require("path")
const mongoose = require("mongoose")
const cors = require("cors")
const http = require("http")
require("dotenv").config()
const server = http.createServer(app);

const PORT = process.env.PORT || 8080


app.use(cors())

app.use(express.urlencoded({extended: true}))
app.use(express.json())

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))
}

const io = require("socket.io")(server);
console.log(io)
// ?\{
    // cors: {
        // origin: "*",
    //   },
      // path: "/initial",
    // }
  
  
    io.on("connection", async (socket) => {
        console.log("connected")
  
      const socketErr = () =>{
        socket.emit("error","live connectivity issue.")
        socket.disconnect()
      }
    
      let token = false;
      if (!socket.handshake.headers) {
        token = false;
      } else if (!socket.handshake.headers.authorization) {
        token = false;
      } else {
        token = socket.handshake.headers.authorization.split(" ")[1];
      }
      if (!token) {
        socketErr()
      } else {
        const data = await jwt.verify(token, process.env.JWS_TOKEN, (err, data) => {
          if (err) {
            socketErr()
          } else {
            return data;
          }
        });
        if (data) {
          let results = await db.User.findById(data._id).catch((err) =>  console.log("bastered 84"));
          let assoc = await results.getConversations().catch((err) =>  console.log("bastered 86") )
          
          socket.on("create", function (room) {
            
            for (let i = 0; i < assoc.length; i++) {
            
              if (assoc[i].id === parseInt(room)) {
    
                socket.join(room);
                console.log(io.sockets.adapter.rooms);
               
                break;
              }
            }
          });
    
          socket.on("message", (data) => {
            let parsedData = JSON.parse(data);
            let allowed = false
            for (let i = 0; i < assoc.length; i++) {
              if (assoc[i].id === parseInt(parsedData.ConversationId)) {
                allowed = true
                socket.send(parsedData);
                socket.broadcast
                  .to(parsedData.ConversationId)
                  .emit("emit", parsedData);
                break;
              }
            }
            if(allowed !== true){
              
                console.log("bastered 94")
                socketErr()
              
            }
          });
    
          socket.on("leave", (data) => {
            console.log(io.sockets.adapter.rooms.get(data));
            console.log("lin 86 in server file");
            socket.leave(data);
          });
    
          socket.on("disconnect", (reason) => {
            console.log(reason);
            console.log("disconnect working")
          });
    
        } else {
          console.log("bastered 126")
          socketErr()
        }
      }
    });

const standardRoute = require("./routes/standard-routes")
app.use(standardRoute)



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/livechat",{
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false

})






// app.get("*", (req,res) => {
//     res.sendFile(path.join(__dirname, "/client/build/index.html"))
// })

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
    
})
module.exports = app