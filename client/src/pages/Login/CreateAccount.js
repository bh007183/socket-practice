import React, {useState} from 'react'
import "./style.css"
import {Redirect, Link} from "react-router-dom"
import {createUser, clearMessage, setError} from "../../Redux/userActions"
import {useDispatch, useSelector} from "react-redux"
import Alerts from "../../components/Alert"

export default function CreateAccount() {
    const dispatch = useDispatch()
    const success = useSelector(state => state.Store.User.success)
    const error = useSelector(state => state.Store.User.error)

    const [create, setCreate] = useState({
        username: "",
        password: "",
        verifyPassword: "",
        email: "",
    })


    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setCreate({
            ...create, [name]: value
        })

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(create.password !== create.verifyPassword){
            console.log("tiggy")
            dispatch(setError({data: "Your Passwords Do Not Match!"}))
        }
        dispatch(createUser())

    }



    return (
        <div>
            {success ? <Alerts success={success} alert={success} /> : error ? <Alerts error={error} alert={error}/> : <></>}
            <form onSubmit={handleSubmit} className="EntryForm">
                <div className="centerFlex">
                    <input onChange={handleChange} name="username" value={create.username} placeholder="User Name" style={{marginTop: "25px"}}></input>
                </div>
                <div className="centerFlex ">
                    <input onChange={handleChange} name="password" value={create.password} type="password" style={{marginTop: "5vh"}} placeholder="Email"></input>
                </div>
                <div className="centerFlex ">
                    <input onChange={handleChange} name="verifyPassword" value={create.verifyPassword} type="password" style={{marginTop: "5vh"}} placeholder="Password"></input>
                </div>
                <div className="centerFlex ">
                    <input onChange={handleChange} name="email" value={create.email} style={{marginTop: "5vh"}} placeholder="Verify Password"></input>
                </div>
                <div className="spaceBetween createSubmit">
                <Link to="/" style={{marginLeft: "20px"}} >Back</Link>
                    <button style={{marginRight: "20px"}}>Submit</button>
                </div>
            </form>
        </div>
    )
}