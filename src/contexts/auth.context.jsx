import React, { useContext, useState } from "react"
import request from "../utils/request.util";

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
            request.post('/login', data)
                .then(res => {
                    const newToken = res.data.token.token;
                    setToken(newToken);
                    localStorage.setItem("token", newToken);
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