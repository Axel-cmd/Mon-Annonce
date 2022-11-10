import React, { useContext, useState } from "react"
import { getCurrentUserData, userLogin } from "../api/user";

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
                    getUser();
                })
                .catch(err => reject(err))
        })
    }

    const getUser = () => {
        getCurrentUserData()
            .then(value => {
                console.log(value);
                setUser(value)
            })
    }



    const logout = () => {

    }


    return <AuthContext.Provider value={{token, user, login, logout}} >{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
}