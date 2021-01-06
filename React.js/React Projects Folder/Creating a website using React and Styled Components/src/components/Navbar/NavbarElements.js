import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'


//Styled Components
export const Nav = styled.nav`
${'' /* background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};  */}
background:#000;
height: 80px;
marging-top: -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

{/* media query is a css property 
it works only if some conditions are True.*/}
@media screen and (max-width:960px){
     transition: 0.8s all ease;
}
`;
export const NavbarContainer = styled.div`
display: flex; {/* Having a display of flex allows all children of the Row component to use certain flex properties */}
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px; 
`;
export const NavLogo = styled(LinkR)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
font-size:1.5rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
`;

export const MobileIcon = styled.div`
display:none;
@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%,60%); {/* The translate() CSS function repositions an element in the horizontal and/or vertical directions. Its result is a <transform-function> data type.*/}
    font-size: 1.8rem;
    cursor: pointer;
    color:#fff;
}
`;
export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width:760px){
    display:none;
}
`;
export const NavItem = styled.li`
height:80px;
`;
export const NavLinks = styled(LinkS)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active{
    border-bottom: 3px solid #01bf71;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px) {
    display: none;
}
`
export const NavBtnLink = styled(LinkR)`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 10px 22px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.1s ease-in-out;
    background: #fff;
    color:#010606;
}

`