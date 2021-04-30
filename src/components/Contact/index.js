import React from 'react'
import {ContactContainer, ContactTable, ContactColumn, ContactH2, FormH2, Form, ContactContent, ContactAddress, ContactPhone, ContactEmail, FormContent, FormInput, FormLabel, FormButton} from './ContactElements'
const Contact = () => {
    return (
        <ContactContainer>
            <ContactTable>
                <ContactColumn>
                    <FormH2>Get in touch with us</FormH2>
                        <FormContent>
                            <Form action = '/'>
                                <FormLabel htmlFor='name'>Full Name</FormLabel>
                                <FormInput type= 'text' required />
                                <FormLabel htmlFor='mobileNumber'>Mobile Number</FormLabel>
                                <FormInput type="tel" id="phone" name="phone"pattern="[0,4]-[0-9]{4}-[0-9]{4}" required />
                                <FormLabel htmlFor='tubject'>Subject</FormLabel>
                                <FormInput type= 'text' required />
                                <FormLabel htmlFor='description'>Description</FormLabel>
                                <FormInput type= 'text' required />
                                <FormButton type='submit'>Send</FormButton>
                            </Form>
                        </FormContent>
                </ContactColumn>
                <ContactColumn>
                    <ContactContent>
                    <ContactH2>Medical Press</ContactH2>
                        <ContactAddress>Address : 1-3 College St, North Lakes QLD 4509</ContactAddress>
                        <ContactPhone>Phone :(07) 3482 4677</ContactPhone>
                        <ContactEmail>Email : bestlifemedicals@gmail.com</ContactEmail>
                    </ContactContent>
                </ContactColumn>
            </ContactTable>
        </ContactContainer>
    )
}

export default Contact
