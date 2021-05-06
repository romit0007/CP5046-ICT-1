import React from 'react'
import BookA from '../components/BookA'
import BookABanner from '../components/BookABanner'
import Navbar from '../components/Navbar'

const BApage = () => {
    return (
        <>
            <Navbar/>
            <BookABanner/>
            <BookA/>
        </>
    )
}

export default BApage
