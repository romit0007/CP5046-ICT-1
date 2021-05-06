import React, {useState} from 'react'
import BookA from '../components/BookA'
import BookABanner from '../components/BookABanner'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
const BApage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>        
            <Navbar toggle={toggle}/>
            <BookABanner/>
            <BookA/>
        </>
    )
}

export default BApage
