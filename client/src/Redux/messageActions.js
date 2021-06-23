import {createSlice} from "@reduxjs/toolkit"
import {apiCallBegan} from "./apiActions"

export const slice = createSlice({

    name: "Message",
    initialState: {
        user: "",
        message: "",
    },
    reducers: {
        doStuff: (Message, action) => {

        }
    }

})
export const {doStuff} = slice.actions

export default slice.reducer

export const apiCall = () => apiCallBegan({
    
})