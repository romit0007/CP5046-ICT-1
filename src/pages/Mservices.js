import React, {useState} from 'react'
import AServices from '../components/AServices'
import  Navbar  from '../components/Navbar'
import PageBanner from '../components/PageBanner'
import Sidebar from '../components/Sidebar'

const Mservices = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <PageBanner pageTitle = "Services"/> 
        <AServices/> 
        </>
    )
}

export default Mservices
