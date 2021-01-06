import React from 'react'
import { FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';
import {FooterContainer,FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink,SocialMedia,SocialMediaWrap,SocialLogo,WebsiteRights,SocialIcons,SocialIconLink} from './FooterElements';
import {animateScroll as scroll} from 'react-scroll'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
        <FooterWrap>
         <FooterLinksContainer>
             <FooterLinksWrapper>
                 <FooterLinkItems>
                     <FooterLinkTitle>About Us</FooterLinkTitle>
                         <FooterLink to="/signin">How it works</FooterLink>
                         <FooterLink to="/signin">Testimonials</FooterLink>
                         <FooterLink to="/signin">Careers</FooterLink>
                         <FooterLink to="/signin">Investors</FooterLink>
                         <FooterLink to="/signin">Terms of Service</FooterLink>
                 </FooterLinkItems>
                 <FooterLinkItems>
                     <FooterLinkTitle>Contact Us</FooterLinkTitle>
                         <FooterLink to="/signin">Contact</FooterLink>
                         <FooterLink to="/signin">Support</FooterLink>
                         <FooterLink to="/signin">Destination</FooterLink>
                         <FooterLink to="/signin">Sponsorship</FooterLink>
                 </FooterLinkItems>
             </FooterLinksWrapper>

             <FooterLinksWrapper>
                 <FooterLinkItems>
                     <FooterLinkTitle>Submit Videos</FooterLinkTitle>
                         <FooterLink to="/signin">Ambassadors</FooterLink>
                         <FooterLink to="/signin">Agency</FooterLink>
                         <FooterLink to="/signin">Influencer</FooterLink>
                 </FooterLinkItems>
                 <FooterLinkItems>
                     <FooterLinkTitle>Social Media</FooterLinkTitle>
                         <FooterLink to="/signin">Instagram</FooterLink>
                         <FooterLink to="/signin">Facebook</FooterLink>
                         <FooterLink to="/signin">Youtube</FooterLink>
                         <FooterLink to="/signin">Twitter</FooterLink>
                 </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>

                 <SocialMedia>
                 <SocialMediaWrap>
                     <SocialLogo to='/' onClick={toggleHome}>
                         VBank
                     </SocialLogo>
                     <WebsiteRights>
                        VBank © {new Date().getFullYear()} All rights reserved.
                     </WebsiteRights>
                     <WebsiteRights>
                        Made with React.js ✨ and Styled Components.
                     </WebsiteRights>


                     <SocialIcons>
                         <SocialIconLink href="//www.youtube.com/channel/UCfOhKJwZKou-IOl7mG4ruwQ" target="_blank" aria-label="YouTube">
                            <FaYoutube />
                         </SocialIconLink>
                         <SocialIcons>
                         <SocialIconLink href="//www.twitter.com/JnAbhish" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                         </SocialIconLink>
                         </SocialIcons>
                         <SocialIconLink href="//www.github.com/abhishek-netizen" target="_blank" aria-label="GitHub">
                            <FaGithub />
                         </SocialIconLink>
                     </SocialIcons>
                 </SocialMediaWrap>
                 </SocialMedia>
        </FooterWrap>
        </FooterContainer>            
    );
};

export default Footer;
