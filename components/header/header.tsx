import { useState } from 'react'
import Navbar from '../navbar/navbar'

const Header = () => {
    const [show, setShow] = useState(false)

    const handleNavbar = () => setShow(!show)
    
    return (
        <div>
            <Navbar navbarState={show} handleNavbar={handleNavbar} />
        </div>

    )
}

export default Header