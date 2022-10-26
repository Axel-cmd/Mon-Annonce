import React, { useContext, useState } from "react"

const AuthContext = React.createContext(null)

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);

    const login = () => {

    }

    const logout = () => {

    }


    return <AuthContext.Provider value={{token, user, login, logout}} >{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
}