import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const InitialToken = JSON.parse(localStorage.getItem('token'));


    const [token, setToken] = useState(InitialToken);

    useEffect(() => {
        if (token) {
            localStorage.setItem('token', JSON.stringify(token))
        }

        else {
            localStorage.removeItem('token')
        }
    }, [token]);

    return (
        <AuthContext.Provider value={{token, setToken}}>
            {children}
        </AuthContext.Provider>
    )
}

