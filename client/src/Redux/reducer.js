import {combineReducers} from "redux"
import userReducer from "./userActions"

export default combineReducers({
    
        User: userReducer
    
})