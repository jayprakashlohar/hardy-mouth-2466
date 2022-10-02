import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext()

const AppContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false)
    const [cartItem, setCartItem] = useState(0)


    useEffect(() => {
        let localIsAuth = JSON.parse(localStorage.getItem('isAuth'))
        let localCartItem = JSON.parse(localStorage.getItem('cartItem'))
        if (localIsAuth) {
            setIsAuth(localIsAuth)
            setCartItem(localCartItem)
        }
    }, [])

    return <AppContext.Provider value={{isAuth, setIsAuth, cartItem, setCartItem}}>
        {children}
    </AppContext.Provider>

}

export default AppContextProvider