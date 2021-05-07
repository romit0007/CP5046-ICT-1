import React, {useState} from 'react'
import Contact from '../components/Contact'
import Navbar2 from '../components/Navbar2'
import PageBanner from '../components/PageBanner' 
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
        <PageBanner />
        <Contact />
        
        </>
    )
}

export default ContactPage
