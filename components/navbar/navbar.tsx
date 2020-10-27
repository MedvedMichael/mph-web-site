import styled from "styled-components";
import { useSpring, animated, config, AnimatedValue } from "react-spring";
import Link from 'next/link'

import BurgerMenu from "./burger-menu";
import CollapseMenu from "./collapse-menu";
import NavbarProps from "../../interfaces/NavbarProps";



const Navbar = ({navbarState, handleNavbar}: NavbarProps) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <>
      <NavBar className='navbar navbar-expand-lg navbar-dark bg-primary' style={barAnimation}>
        <FlexContainer>
          <NavbarTitle>
            <Link href='/'>MPH's web site</Link>
          </NavbarTitle>
          <NavLinks className="navbar-nav mr-auto d-flex" style={linkAnimation}>
            <li className="nav-item nav-link">
              <Link href="/">Home</Link>
            </li>
            <li className="nav-item nav-link">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="nav-item nav-link">
              <Link href="#">Portfolio</Link>
            </li>
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Separated link</a>
              </div>
            </li> */}
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={navbarState}
              handleNavbar={handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={navbarState}
        handleNavbar={handleNavbar}
      />
    </>
  )
}

export default Navbar

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  font-size: 1.4rem;
`;

const NavbarTitle = styled.h3`
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    display: block;
    margin-top: 1.25rem;
    /* margin-right: auto; */
    min-width: 16rem;
    text-decoration: none;
    & :hover {
      text-decoration:none;
      color: #fff;
    }
    /* transition: all 300ms linear 0s; */
`

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  flex-grow:1;
  margin: auto;
  /* padding: 0 1rem; */
  justify-content: space-between;
  height: 5rem;
`;

const NavLinks = styled(animated.ul)`
  flex-direction: row;
  justify-self: end;
  list-style-type: none;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 1rem;

  
  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;
  margin-left: auto;
  

  @media (min-width: 769px) {
    display: none;
  }
`;