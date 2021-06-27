const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
const jwt = require("jsonwebtoken")

const db = require("./models")

const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
    cors: {
        origin: "*"
    },
    path: "/initial"
});



const standardRoute = require("./routes/standard-routes");
app.use(standardRoute);
require("./routes/message-routes")(io, jwt, db)



if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }  

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/livechat", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});


// app.get("*", (req,res) => {
//     res.sendFile(path.join(__dirname, "/client/build/index.html"))
// })

httpServer.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

