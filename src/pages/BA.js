import React, {useState} from 'react'
import BookA from '../components/BookA'
import BookABanner from '../components/BookABanner'
import Navbar2 from '../components/Navbar2'
import Sidebar from '../components/Sidebar'
const BApage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>        
            <Navbar2 toggle={toggle}/>
            <BookABanner/>
            <BookA/>
        </>
    )
}

export default BApage
