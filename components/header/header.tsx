import { FunctionComponent, useContext, useEffect, useState } from 'react'
// import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { useRouter } from 'next/router'
import Navbar from '../navbar/navbar'

const Header = () => {
    // const [theme, setTheme] = useState('light')
    const [show, setShow] = useState(false)

    const handleNavbar = () => setShow(!show)
    const history = useRouter()
    // console.log(theme)
    

    
    return (
        <div>
            {/* <Navbar
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
            </Navbar> */}
            <Navbar navbarState={show} handleNavbar={handleNavbar} />
        </div>

    )
}

export default Header