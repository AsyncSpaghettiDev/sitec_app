import { useState, ReactNode } from "react"
import { Context } from "./context"

interface Props {
    children: ReactNode
}

export const GlobalContext = ({ children }: Props) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const login = () => setIsLoggedIn(true)
    const logout = () => setIsLoggedIn(false)
    const get_user = () => {
        console.log('Getting user...')
    }

    const value = {
        isLoggedIn,
        login,
        logout,
        get_user
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}