import React, {useState} from 'react'
import Covid from '../components/Covid'
import CovidBanner from '../components/CovidBanner'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'


const CovidPage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <CovidBanner/>
        <Covid />
        </>
    )
}

export default CovidPage
