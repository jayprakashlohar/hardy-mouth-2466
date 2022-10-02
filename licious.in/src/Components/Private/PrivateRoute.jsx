import React, { useContext, useState } from "react";
import {Navigate} from "react-router-dom"
import { AppContext } from "../Context/AppContext";


const PrivateRoute = ({children}) => {
 const {isAuth} = useContext(AppContext)
 
 console.log('is', isAuth)

 if(!isAuth) {
    return <Navigate to="/" />
 }
 return children
}

export default PrivateRoute