import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SideBtnWrap, SidebarMenu, SidebarRouter} from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen = {isOpen} onClick = {toggle}>
            <Icon onClick = {toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='services' onClick = {toggle}>Services</SidebarLink>
                    <SidebarLink to='team' onClick = {toggle}>Team</SidebarLink>
                    <SidebarLink to='policy' onClick = {toggle}>Policy</SidebarLink>
                    <SidebarLink to='contact' onClick = {toggle}>Contact</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRouter to = '/booking'>
                        Book an Appointment
                    </SidebarRouter>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
export default Sidebar
