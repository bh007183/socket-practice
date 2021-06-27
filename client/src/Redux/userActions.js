import {createSlice} from "@reduxjs/toolkit"
import {apiCallBegan} from "./apiActions"

export const slice = createSlice({

    name: "User",
    initialState: {
        username: "",
        message: "",
        success: "",
        error: "",
        searchResults: [],
        Friends: []
        
        
    },
    reducers: {
        
        setSuccess: (User, action) => {
            User.success = action.payload  
        },
        setError: (User, action) => {
            User.error = action.payload.data
        },
        clearBoth: (User, action) => {
            User.success = "";
            User.error = ""
        },
        clearSuccess: (User, action) => {
            User.success = "";
        },
        loginSuccess: (User, action) => {
            localStorage.setItem("Token", action.payload.token)
            User.username = action.payload.username
            User.success = true
            
        },
        setSearchResults: (User, action) => {
            User.searchResults = action.payload
        },
        setFriends: (User, action) => {
            User.Friends = action.payload
        }

    }

})
export const {doStuff, setSuccess, setError, clearMessage, loginSuccess, clearSuccess, setSearchResults, setFriends} = slice.actions

export default slice.reducer

export const createUser = (data) => apiCallBegan({
    url: "http://localhost:8080/api/createUser",
    data: data,
    method: "POST",
    onSuccess: window.location.href = "/",
    onError: setError.type
    
})

export const userLogin = (data) => apiCallBegan({
    url: "http://localhost:8080/login",
    data: data,
    method: "POST",
    onSuccess: loginSuccess.type,
    onError: setError.type
})
export const searchUser = (data) => apiCallBegan({
    url: `http://localhost:8080/api/find/user/${data}`,
    method: "GET",
    onSuccess: setSearchResults.type,
    onError: setError.type
})
export const connectionRequest = (data) => apiCallBegan({
    url: `http://localhost:8080/api/connectionRequest`,
    headers: {authorization: "Bearer: " + localStorage.getItem("Token")},
    method: "POST",
    data: data,
    onSuccess: setSuccess.type,
    onError: setError.type
})
export const getFriends = () => apiCallBegan({
    url: `http://localhost:8080/api/getfriends`,
    headers: {authorization: "Bearer: " + localStorage.getItem("Token")},
    onSuccess: setFriends.type,
    onError: setError.type
})