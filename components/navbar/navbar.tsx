import styled from "styled-components";
import { useSpring, animated, config, AnimatedValue } from "react-spring";
import Link from 'next/link'

import BurgerMenu from "./burger-menu";
import CollapseMenu from "./collapse-menu";
import NavbarProps from "../../interfaces/NavbarProps";
import { useContext } from "react";
import { DarkThemeContext } from "../Providers";



const Navbar = ({ navbarState, handleNavbar }: NavbarProps) => {

  const darkMode = useContext(DarkThemeContext)
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
    {/* 'navbar navbar-expand-lg navbar-light bg-light' */}
      <NavBar style={barAnimation}>
        <FlexContainer>
          <NavbarTitle>
            <Link href='/'>MPH's web site</Link>
          </NavbarTitle>
          <NavLinks style={linkAnimation}>
            <li className="nav-item nav-link">
              <Link href="/">Home</Link>
            </li>
            <li className="nav-item nav-link">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="nav-item nav-link">
              <Link href="#">Portfolio</Link>
            </li>

            <ChangeThemeButton className="nav-item nav-link">
              <a onClick={darkMode.toggle}>
                <i aria-hidden={true} className={`${!darkMode.value ? ' far fa-sun' : ' fas fa-cloud-moon'}`} />
              </a>
            </ChangeThemeButton>
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
  /* position: relative; */
  z-index: 5;
  font-size: 1.4rem;
  background-color: ${props => props.theme.bg.nav};
  transition: ${props => props.theme.transition.bg};
  color: ${props => props.theme.text.primary}
  
`;

const NavbarTitle = styled.h3`
    color: ${props => props.theme.text.primary};
    font-size: 2rem;
    line-height: 1.2;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    display: block;
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
    /* margin-right: auto; */
    min-width: 16rem;
    text-decoration: none;
    transition: ${props => props.theme.transition.primary};
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
  padding-left: 1.5rem;
  justify-content: space-between;
  height: 5rem;
`;

const NavLinks = styled(animated.ul)`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    justify-self: end;
    list-style-type: none;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 1rem;
    margin-right: .5rem;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    padding-left: 0;
    list-style: none;

  & li {
    padding-right: 0;
    padding-left: 0;
  }
  
  & a {
    ${props => props.theme.text.primary};
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: ${props => props.theme.transition.primary};
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #ffc71f;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 800px) {
      display: none;
    }
  }
`;

const ChangeThemeButton = styled.li`
    display: block;
    margin-left: auto;
`

const BurgerWrapper = styled.div`
  margin: auto 0;
  margin-left: auto;
  margin-right: 1rem;
  
  

  @media (min-width: 800px) {
    display: none;
  }
`;