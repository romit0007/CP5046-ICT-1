import React from 'react'
import Covid from '../components/Covid'
import CovidBanner from '../components/CovidBanner'
import Navbar from '../components/Navbar'


const CovidPage = () => {
    return (
        <>
        <Navbar/>
        <CovidBanner/>
        <Covid />
        </>
    )
}

export default CovidPage
