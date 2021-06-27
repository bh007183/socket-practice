import React, { useEffect } from "react";
import "./style.css";
import Bar from "../../components/bar";
import SideBar from "../../components/sideBar";
import { useDispatch } from "react-redux";
import { getFriends } from "../../Redux/userActions";
import { io } from "socket.io-client";
let socket;
export default function Dashboard() {
  useEffect(() => {
      try{
        socket = io("http://localhost:8080");
        
        //  {
            //   path: "/initial",
            // extraHeaders: {
            //     authorization: "Bearer: " + localStorage.getItem("Token"),
            //   },
            // }

      }catch(err){
          console.log(err.message)
      }
    
    socket.on("connection_error", (err) => {
        console.log("toad")
        console.log(`${err.message}`)
    })
  }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFriends());
  }, []);
  return (
    <div id="DashContain">
      <Bar />

      <SideBar />
      <div id="messages"></div>
    </div>
  );
}
