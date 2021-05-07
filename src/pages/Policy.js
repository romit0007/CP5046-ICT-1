import React,{useState} from 'react'
import  Navbar2  from '../components/Navbar2'
import APolicy from '../components/APolicy'
import PolicyBanner from '../components/PolicyBanner'
import Sidebar from '../components/Sidebar'

const Policy = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar2 toggle={toggle}/>
        <PolicyBanner/>
        <APolicy /> 
        </>
    )
}
export default Policy