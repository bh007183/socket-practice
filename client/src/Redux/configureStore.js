import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import reducer from "./store"
import {api} from "./apiMiddleWare/api"

export default function(){
    return configureStore({
        reducer,
        middleware: [ ...getDefaultMiddleware({serializeableCheck: false}), api]

    })

}