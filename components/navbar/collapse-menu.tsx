import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import NavbarProps from '../../interfaces/NavbarProps';
import Link from 'next/link';




const CollapseMenu = ({ navbarState, handleNavbar}: NavbarProps) => {
  const { open } = useSpring({ open: navbarState ? 0 : 1 });

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
          <li className="nav-item nav-link">
            <Link href="/">Home</Link>
          </li>
          <li className="nav-item nav-link">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="nav-item nav-link">
            <Link href="#">Portfolio</Link>
          </li>
          <li className="nav-item nav-link">
            <a>
              {/* <i aria-hidden={true} className={`${theme === 'light' ? ' far fa-sun' : ' fas fa-cloud-moon'}`} /> */}
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
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 1rem 1rem;
  margin-top: 1rem;
  
  
  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    color: ${props => props.theme.text.primary};

    &:hover {
      color: #f39c1a;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;

