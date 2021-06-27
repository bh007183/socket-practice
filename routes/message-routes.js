


module.exports = function(io,jwt, db){

    io.on("connection", async (socket) => {
         console.log("tet")
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
            console.log(token)
          const data = await jwt.verify(token, process.env.JWS_SEOL, (err, data) => {
            if (err) {
              socketErr()
            } else {
              return data;
            }
          });
          if (data) {
            let results = await db.User.findById(data._id).catch((err) =>  console.log(err));
            console.log(results)
           
            
           
      
           
      
          } else {
            console.log("bastered 126")
            socketErr()
          }
        }
      });

}


  






