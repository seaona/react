import React, { createContext } from'react';
import useToggleState from '../hooks/useToggleState';

export const ThemeContext = createContext();

// each context has 2 pieces: the provider and the consumer

export function ThemeProvider(props) {
    const [isDarkMode, toggleTheme] = useToggleState(false);

    return (
        <ThemeContext.Provider
            value={{isDarkMode, toggleTheme }}
        >
            {props.children}
        </ThemeContext.Provider>
    )
};