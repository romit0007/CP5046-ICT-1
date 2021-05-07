import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav2, Navbar2Container, Nav2Logo, Mobile2Icon, Nav2Menu, Nav2Links, Nav2Item, Nav2Btn, Nav2BtnLink } from './Navbar2Elements'

import { animateScroll as scroll } from 'react-scroll'

// import NavImage from '../../../src/Logo.png'


const Navbar2 = ({ toggle }) => {

    const toggeleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <Nav2>
                <Navbar2Container>
                    <Nav2Logo to='/' onClick={toggeleHome} > Best Life Medicals
                    </Nav2Logo>
                    <Mobile2Icon onClick={toggle}>
                        <FaBars />
                    </Mobile2Icon>
                    <Nav2Menu>
                        <Nav2Item>
                            <Nav2Links to='/Mservices'>Services</Nav2Links>
                        </Nav2Item>
                        <Nav2Item>
                            <Nav2Links to='team'>Team</Nav2Links>
                        </Nav2Item>
                        <Nav2Item>
                            <Nav2Links to='/Policy'>Policy</Nav2Links>
                        </Nav2Item>
                        <Nav2Item>
                            <Nav2Links to='/Contact'>Contact</Nav2Links>
                        </Nav2Item>
                    </Nav2Menu>
                    <Nav2Btn>
                        <Nav2BtnLink to='/BA'>Book an Appointment</Nav2BtnLink>
                    </Nav2Btn>
                </Navbar2Container>
            </Nav2>
        </>
    )
}

export default Navbar2
