import React, { useContext, useState } from "react"
import { userLogin } from "../api/user";

const AuthContext = React.createContext(null)

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);

    const login = ({ email, password}) => {
        return new Promise( (resolve, reject) => {
            const data = {
                email,
                password 
            }
            userLogin(data)
                .then(res => {
                    setToken(res);
                    localStorage.setItem("token", res);
                    resolve();
                })
                .catch(err => reject(err))
        })
    }

    const logout = () => {

    }


    return <AuthContext.Provider value={{token, user, login, logout}} >{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
}