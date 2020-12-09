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
        const localTheme = localStorage.getItem('theme')
        if(localTheme){
            if(localTheme === 'light')
                darkMode.disable()
            else darkMode.enable()
        }
        setMounted(true)
    }, [])

    

    const body = (
    <DarkThemeContext.Provider value={darkMode}>
        <ThemeProvider theme={theme}>
            <>{children}</>
        </ThemeProvider>
    </DarkThemeContext.Provider>)
    
    if (!mounted) {
        return <div style={{ visibility: 'hidden' }}>{body}</div>
    }

    return body
}

export default Providers

export {DarkThemeContext}