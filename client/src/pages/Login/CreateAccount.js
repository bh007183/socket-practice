import React from 'react'
import "./style.css"
import {Redirect, Link} from "react-router-dom"

export default function CreateAccount() {
    return (
        <div>
            <form className="EntryForm">
                <div className="centerFlex">
                    <input placeholder="User Name"></input>
                </div>
                <div className="centerFlex ">
                    <input type="password" placeholder="Email"></input>
                </div>
                <div className="centerFlex ">
                    <input type="password" placeholder="Password"></input>
                </div>
                <div className="centerFlex ">
                    <input type="password" placeholder="Verify Password"></input>
                </div>
                <div className="spaceBetween createSubmit">
                <Link to="/">Back</Link>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}