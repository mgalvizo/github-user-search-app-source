import { createContext, useEffect, useState, useCallback } from 'react';

const initialState = {
    changeTheme: () => {},
    isLightTheme: false,
};

const ThemeContext = createContext(initialState);

const ThemeContextProvider = ({ children }) => {
    const [isLightTheme, setisLightTheme] = useState(true);

    // Change between light and dark mode
    const changeThemeHandler = useCallback(() => {
        setisLightTheme(prevTheme => !prevTheme);
    }, []);

    useEffect(() => {
        const currentTheme = isLightTheme ? 'light' : 'dark';

        localStorage.setItem('theme', currentTheme);

        document.querySelector('html').classList.add(currentTheme);

        return () => {
            document.querySelector('html').classList.remove(currentTheme);
        };
    }, [isLightTheme]);

    const contextValue = {
        changeTheme: changeThemeHandler,
        isLightTheme,
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContextProvider };

export default ThemeContext;
