import React, {useState} from 'react'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
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
        <Navbar toggle={toggle} />
        <PageBanner />
        <Contact />
        
        </>
    )
}

export default ContactPage
