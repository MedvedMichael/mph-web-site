import { lightTheme, darkTheme } from './themes';
import React, {useState, useEffect, createContext} from 'react'
import useDarkMode from 'use-dark-mode';
import {ThemeProvider} from 'styled-components'

const DarkThemeContext = createContext(null)

const Providers = ({ children }) => {
    const darkMode = useDarkMode(false, { storageKey: null, onChange: null })
    const theme = darkMode.value ? darkTheme : lightTheme

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    

    const body =
    //@ts-ignore
    <DarkThemeContext.Provider value={darkMode}>
        <ThemeProvider theme={theme}>
            <>{children}</>
        </ThemeProvider>
    </DarkThemeContext.Provider>
    // prevents ssr flash for mismatched dark mode
    if (!mounted) {
        return <div style={{ visibility: 'hidden' }}>{body}</div>
    }

    return body
}

export default Providers

export {DarkThemeContext}