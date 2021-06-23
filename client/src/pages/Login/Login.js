import React from 'react'
import "./style.css"
import {Link} from "react-router-dom"

export default function Login() {
    return (
        <div>
            <form className="EntryForm">
                <div className="centerFlex">
                    <input placeholder="User Name"></input>
                </div>
                <div className="centerFlex ">
                    <input type="password" placeholder="Password"></input>
                </div>
                <div className="spaceBetween createSubmit">
                    <Link to="/createaccount">Create Account</Link>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}
