import React,{useState} from 'react'
import  Navbar  from '../components/Navbar'
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
        <Navbar toggle={toggle}/>
        <PolicyBanner/>
        <APolicy /> 
        </>
    )
}
export default Policy