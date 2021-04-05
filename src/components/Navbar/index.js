import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink} from './NavbarElements'

import {animateScroll as scroll} from 'react-scroll'


const Navbar = ({toggle}) => {

    const toggeleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to = '/' onClick = {toggeleHome}>BLM</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to = 'services'>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to = 'team'>Team</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to = 'policy'>Policy</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to = 'contact'>Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to = '/BA'>Book an Appointment</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
