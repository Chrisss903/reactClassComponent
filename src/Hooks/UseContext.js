import React, { useState, createContext } from "react";
import MainPage from "./MainPage";
export const LoginContext = createContext();

export default function UseContext() {

    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {

        setTheme(theme === 'light' ? 'dark' : 'light')
    }


    return (
        <>
            <LoginContext.Provider value={{ theme, toggleTheme }}>
                <MainPage />
            </LoginContext.Provider >
        </>
    )

}