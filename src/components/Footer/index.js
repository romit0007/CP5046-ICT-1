import React from 'react'

import {FooterContainer, FooterTable, FooterColumn, FooterH1, FooterMenu, FooterItem, FooterLinks, SocialMedia, FooterInput} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterTable>
                <FooterColumn>
                    <FooterH1>
                        Quick Links
                    </FooterH1>
                    <FooterMenu>
                        <FooterItem>
                            <FooterLinks>Services</FooterLinks>
                        </FooterItem>
                        <FooterItem>
                            <FooterLinks>Team</FooterLinks>
                        </FooterItem>
                        <FooterItem>
                            <FooterLinks>Policy</FooterLinks>
                        </FooterItem>
                        <FooterItem>
                            <FooterLinks>Contact Us</FooterLinks>
                        </FooterItem>
                        <FooterItem>
                            <FooterLinks>Book a Appointment</FooterLinks>
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
        </FooterContainer>
    )
}

export default Footer
