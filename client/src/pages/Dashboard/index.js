import React, { useEffect } from "react";
import "./style.css";
import Bar from "../../components/bar";
import SideBar from "../../components/sideBar";
import { useDispatch } from "react-redux";
import { getFriends } from "../../Redux/userActions";
import { io } from "socket.io-client";


export default function Dashboard() {
 
    
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFriends());
    const socket = io("http://localhost:8080", {
        path: "/initial",
        extraHeaders:{
            authorization: `Bearer ${localStorage.getItem("Token")}`
        }
    });
      
  }, []);
  return (
    <div id="DashContain">
      <Bar />

      <SideBar />
      <div id="messages"></div>
    </div>
  );
}
