"use client";
import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('theme') || 'light';
    }
    return 'light';
};

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = getFromLocalStorage();
        setTheme(savedTheme);
    }, []);

    const toggle = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
};