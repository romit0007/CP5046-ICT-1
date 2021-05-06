import React from 'react'

import {FooterContainer, FooterTable, FooterColumn, FooterH1, FooterMenu, FooterItem, FooterLinks, SocialMedia, FooterInput, FooterWrapper} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterTable>
                    <FooterColumn>
                        <FooterH1>
                            Quick Links
                        </FooterH1>
                        <FooterMenu>
                            <FooterItem>
                                <FooterLinks to = '/Mservices'>Services</FooterLinks>
                            </FooterItem>
                            <FooterItem>
                                <FooterLinks to = '/policy'>Policy</FooterLinks>
                            </FooterItem>
                            <FooterItem>
                                <FooterLinks to = 'contact'>Contact Us</FooterLinks>
                            </FooterItem>
                            <FooterItem>
                                <FooterLinks to = 'BA'>Book a Appointment</FooterLinks>
                            </FooterItem>
                        </FooterMenu>
                    </FooterColumn>
                    <FooterColumn>
                        <FooterH1>
                            Social Media
                        </FooterH1>
                        <SocialMedia>
                            
                        </SocialMedia>
                    </FooterColumn>
                    <FooterColumn>
                        <FooterH1>
                            Subscribe to Newsletter
                        </FooterH1>
                        <FooterInput>

                        </FooterInput>
                    </FooterColumn>
                </FooterTable>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
