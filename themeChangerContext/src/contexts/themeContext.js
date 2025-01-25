import { createContext, useContext } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ThemeContext.Provider

export default function() {
    return useContext(ThemeContext)
}