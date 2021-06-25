import React, {useState} from 'react'
import "./style.css"
import {Link, Redirect} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import Alerts from "../../components/Alert"
import {userLogin, clearSuccess} from "../../Redux/userActions"

export default function Login() {
    const dispatch = useDispatch()

    const success = useSelector(state => state.Store.User.success)

    const error = useSelector(state => state.Store.User.error)

    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setLogin({
            ...login, [name]: value
        })

    }
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(userLogin(login))
        
            setTimeout(() => {
                dispatch(clearSuccess())
            
            }, 2000);


    }
 
    


    return (
        <div>
            {success ? <Redirect push to="/theDash"/> : <></>}
            {error ? <Alerts error={error} alert={error}/> : <></>}
            <form onSubmit={handleSubmit} className="EntryForm">
                <div className="centerFlex">
                    <input onChange={handleChange} name="email" value={login.email} placeholder="Email" style={{marginTop: "5vh"}}></input>
                </div>
                <div className="centerFlex ">
                    <input onChange={handleChange} name="password" value={login.password} type="password" style={{marginTop: "5vh"}} placeholder="Password"></input>
                </div>
                <div className="spaceBetween createSubmit">
                    <Link to="/createaccount" style={{marginLeft: "20px"}} >Create Account</Link>
                    <button style={{marginRight: "20px"}} >Submit</button>
                </div>
            </form>
        </div>
    )
}
