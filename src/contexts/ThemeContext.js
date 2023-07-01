import React, { createContext, useContext, useState } from "react";


const ThemeContext = createContext()

export function useTheme() {
    return useContext(ThemeContext)
} 

export function ThemeProvider({children}) {

    const [darkTheme,setDarkTheme] = useState(false)
   
    function toggleTheme(e) {
        e.preventDefault()
        setDarkTheme(prev => !prev)
    }

    return(
        <ThemeContext.Provider value={{darkTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}