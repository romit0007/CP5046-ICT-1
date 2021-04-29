import React from 'react'
import AServices from '../components/AServices'
import  Navbar  from '../components/Navbar'
import PageBanner from '../components/PageBanner'


const Mservices = () => {
    return (
        <>
         <Navbar/>
         <PageBanner pageTitle = "Services"/> 
         <AServices/> 
        </>
    )
}

export default Mservices
