import {createSlice} from "@reduxjs/toolkit"
import {apiCallBegan} from "./apiActions"

export const slice = createSlice({

    name: "User",
    initialState: {
        UserName: "",
        message: "",
        success: "",
        error: ""
    },
    reducers: {
        doStuff: (User, action) => {

        },
        setSuccess: (User, action) => {
            User.success = action.payload
        },
        setError: (User, action) => {
            User.error = action.payload.data
        },
        clearMessage: (User, action) => {
            User.success = "";
            User.error = ""
        }
    }

})
export const {doStuff, setSuccess, setError, clearMessage} = slice.actions

export default slice.reducer

export const createUser = (data) => apiCallBegan({
    url: "http://localhost:8080/api/createUser",
    data: data,
    method: "POST",
    OnSuccess: setSuccess.type,
    OnError: setError.type
    
})