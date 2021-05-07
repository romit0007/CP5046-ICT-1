import React, {useState} from 'react'
import Contact from '../components/Contact'
import Navbar2 from '../components/Navbar2'
import ContactBanner from '../components/ContactBanner' 
import Sidebar from '../components/Sidebar'

const ContactPage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/> 
        <Navbar2 toggle={toggle} />
        <ContactBanner />
        <Contact />
        
        </>
    )
}

export default ContactPage
