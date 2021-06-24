import React from 'react'
import "./style.css"
import {Redirect, Link} from "react-router-dom"

export default function CreateAccount() {
    return (
        <div>
            <form className="EntryForm">
                <div className="centerFlex">
                    <input placeholder="User Name" style={{marginTop: "25px"}}></input>
                </div>
                <div className="centerFlex ">
                    <input type="password" style={{marginTop: "5vh"}} placeholder="Email"></input>
                </div>
                <div className="centerFlex ">
                    <input type="password" style={{marginTop: "5vh"}} placeholder="Password"></input>
                </div>
                <div className="centerFlex ">
                    <input type="password" style={{marginTop: "5vh"}} placeholder="Verify Password"></input>
                </div>
                <div className="spaceBetween createSubmit">
                <Link to="/" style={{marginLeft: "20px"}} >Back</Link>
                    <button style={{marginRight: "20px"}}>Submit</button>
                </div>
            </form>
        </div>
    )
}