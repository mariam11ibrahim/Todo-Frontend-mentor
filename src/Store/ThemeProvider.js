import { useEffect } from "react";
import { useState } from "react";
import ThemeContext from "./theme-context";

const defaultTheme = JSON.parse(localStorage.getItem("LiTh"));

const ThemeProvider = ({ children }) => {

    const [isLightTheme, setIsLightTheme] = useState(defaultTheme != null ? defaultTheme : true);

    useEffect(() => localStorage.setItem("LiTh", isLightTheme), [isLightTheme])

    const toggleTheme = () => setIsLightTheme(prevMood => !prevMood)

    const themeContext = {
        isLightTheme,
        toggleTheme,
    }
    return (
        <ThemeContext.Provider value={themeContext}>
            {children}
        </ThemeContext.Provider>)
}
export default ThemeProvider;