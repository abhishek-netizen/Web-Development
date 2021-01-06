import React,{useState, useEffect} from 'react'
import {FaBars}  from 'react-icons/fa';
import {IconContext} from 'react-icons';
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink} from './NavbarElements'
import {animateScroll as scroll } from 'react-scroll';

const Navbar = ({toggle}) => {
    const [scrollNav,setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        }else{
            setScrollNav(false);
        }
    };

     useEffect(()=>{
         window.addEventListener('scroll', changeNav);
     }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
    <> {/* its a React.fragments */}
    <IconContext.Provider value={{color:'#fff'}}>
    <Nav scrollNav = {scrollNav}>
      <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>VBank</NavLogo>
          <MobileIcon onClick={toggle}>
              <FaBars />
          </MobileIcon>
          <NavMenu>
              <NavItem>
                  <NavLinks 
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={80}
                  >About</NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks 
                  to="discover"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={80}
                  >Discover</NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks 
                  to="services" smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={80}>Services</NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to="signup" smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={80}>Sign Up</NavLinks>
              </NavItem>
          </NavMenu>
          <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
      </NavbarContainer>
    </Nav>
</IconContext.Provider>
    </>

    )
}

export default Navbar



