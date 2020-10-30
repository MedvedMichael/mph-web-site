import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import NavbarProps from '../../interfaces/NavbarProps';
import Link from 'next/link';
import { useContext } from 'react';
import { DarkThemeContext } from '../Providers';




const CollapseMenu = ({ navbarState, handleNavbar }: NavbarProps) => {
  const { open } = useSpring({ open: navbarState ? 0 : 1 });

  const darkMode = useContext(DarkThemeContext)

  if (navbarState === true) {
    return (
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200],
        }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
        // background: theme === 'light' ? '#fff' : '#2d3436'
      }}
      >
        {/* {style={{color: theme === 'light' ? '#2d3436' :'#dfe6e9'}} */}
        <NavLinks >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <a onClick={darkMode.toggle}>
              <i aria-hidden={true} className={`${!darkMode.value ? ' fas fa-sun' : ' fas fa-cloud-moon'}`} />
            </a>
          </li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: ${props => props.theme.bg.nav};
  transition: ${props => props.theme.transition.bg};
  position: fixed;
  z-index:4;
  top: 4.5rem;
  left: 0;
  right: 0;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 1rem 1rem;
  margin-top: 1rem;
  color: ${props => props.theme.text.primary};

  & li {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    padding: 0.5rem 2rem;
    list-style: none;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    

    &:hover {
      color: #f39c1a;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;

