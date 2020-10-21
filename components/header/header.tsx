
import styles from './header.module.css'
// import {useRouter} from 'next/router'
import React, { FunctionComponent, useEffect } from 'react'
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import {useState} from 'react'
import { useRouter } from 'next/router'



const Header = () => {
    // const currentTheme = window.localStorage.getItem('theme')
    // console.log(props)
    // const {currentTheme} = props
    // const {style, setStyle} = currentTheme
    // const [theme, setTheme] = useState(true)
    const [theme, setTheme] = useState('light') 
    const history = useRouter()
    useEffect(()=>{
        const res = localStorage.getItem('theme')
        setTheme(res ? res : 'light')
    },[])

    const changeTheme = () => {
        localStorage.setItem('theme', (theme === 'dark' ? 'light' : 'dark'))
        
        console.log(window.location.pathname)
        // history.push(history.asPath)
        history.reload()
    }
    return (
        <Navbar className="navbar-dark" bg="primary" expand="lg">
            <Navbar.Brand className={`${styles["main-title"]} navbar-brand`} href="#home">MPH's website</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="customSwitch1" checked={theme === 'dark'} onClick={changeTheme} />
                    <label className="custom-control-label" htmlFor="customSwitch1">Toggle this switch element</label>
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header