import { useState, useEffect } from 'react';

export default function DarkMode() {
    const [darkMode, setDarkMode] = useState(null);

    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setDarkMode(darkModeMediaQuery.matches)
        darkModeMediaQuery.addListener( ev => setDarkMode(ev.matches));
    });

    return darkMode;
}
