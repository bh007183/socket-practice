import {combineReducers} from "redux"
import userReducer from "./messageActions"

export default combineReducers({
    
        User: userReducer
    
})