import React, {useState} from 'react'
import "./style.css"
import {Link} from "react-router-dom"

export default function Login() {

    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    


    return (
        <div>
            <form className="EntryForm">
                <div className="centerFlex">
                    <input placeholder="Email" style={{marginTop: "5vh"}}></input>
                </div>
                <div className="centerFlex ">
                    <input type="password" style={{marginTop: "5vh"}} placeholder="Password"></input>
                </div>
                <div className="spaceBetween createSubmit">
                    <Link to="/createaccount" style={{marginLeft: "20px"}} >Create Account</Link>
                    <button style={{marginRight: "20px"}} >Submit</button>
                </div>
            </form>
        </div>
    )
}
