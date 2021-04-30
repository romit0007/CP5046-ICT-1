import React from 'react'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterTable>
                <FooterColumn>
                    <FooterH3>Quick Links</FooterH3>
                    <FooterLinks>
                        <ul>
                            <li>Services</li>
                            <li>Team</li>
                            <li>Policy</li>
                        </ul></FooterLinks>
                </FooterColumn>
                <FooterColumn>
                    <FooterH3 >Contact Us</FooterH3>
                </FooterColumn>
                <FooterColumn>
                    <FooterMap>
                        <p>MAP</p>
                    </FooterMap>
                </FooterColumn>
            </FooterTable>
        </FooterContainer>
    )
}

export default Footer
