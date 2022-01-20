import React from 'react';
import {
    FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle,
    FooterLink, SocialMedia, SocialMediaWrap, SocialIcons, SocialIconLink, SocialLogo, WebsiteRights
} from './FooterElements';
import { animateScroll as scroll } from 'react-scroll/modules';

import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us </FooterLinkTitle>
                            <FooterLink to="/" >How it works</FooterLink>
                            <FooterLink to="/" >Testimonials</FooterLink>
                            <FooterLink to="/" >Careers</FooterLink>
                            <FooterLink to="/" >Investors</FooterLink>
                            <FooterLink to="/" >Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us </FooterLinkTitle>
                            <FooterLink to="/" >Contact</FooterLink>
                            <FooterLink to="/" >Support</FooterLink>
                            <FooterLink to="/" >Destinations</FooterLink>
                            <FooterLink to="/" >Sponsorship</FooterLink>
                        </FooterLinkItems>

                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos </FooterLinkTitle>
                            <FooterLink to="/" >Submit Video</FooterLink>
                            <FooterLink to="/" >Ambassadors</FooterLink>
                            <FooterLink to="/" >Agency</FooterLink>
                            <FooterLink to="/" >Influencer</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Social media </FooterLinkTitle>
                            <FooterLink to="/" >Instagram</FooterLink>
                            <FooterLink to="/" >Facebook</FooterLink>
                            <FooterLink to="/" >Youtube</FooterLink>
                            <FooterLink to="/" >Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>dolla</SocialLogo>
                        <WebsiteRights>dolla &copy; {new Date().getFullYear()} All rights reserved</WebsiteRights>
                        <SocialIcons>

                            <SocialIconLink href="/" target="_blank" aria_label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria_label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria_label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria_label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria_label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>

                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>

    )
};

export default Footer;
