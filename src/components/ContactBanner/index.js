import React from 'react'
import Banner from '../../../src/Services-banner1.jpg'
import {ContactContainer, ContactBg, ContactH1} from './ContactBannerElements'

const ContactBanner = () => {
    return (
        <ContactContainer>
            <ContactBg src = {Banner}></ContactBg>
            <ContactH1>Contact Us</ContactH1>
        </ContactContainer>
    )
}

export default ContactBanner