import { createContext } from "react";

interface context {
    isLoggedIn: boolean
    login: () => void
    logout: () => void
    get_user: () => void
}

export const Context = createContext<context>(null!)