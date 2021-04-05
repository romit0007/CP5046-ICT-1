import React from 'react'
import {Container, FormWrap, Icon, FormContent, Form, FormH1,FormInput, FormButton, FormLabel } from './BookAElements'

const BookA = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to ='/'>BLM</Icon>
                <FormContent>
                    <Form action = '/'>
                        <FormH1>Book an appointment here</FormH1>
                        <FormLabel htmlFor='for'> First Name </FormLabel>
                        <FormInput type = 'text' required/>
                        <FormLabel htmlFor='for'>Last Name</FormLabel>
                        <FormInput type = 'text' required/>
                        <FormLabel htmlFor='for'>Mobile Number</FormLabel>
                        <FormInput type = 'number' required/>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type = 'email' required/>
                        <FormLabel htmlFor='for'>Select your Doctor</FormLabel>
                        <FormInput type = 'text' required/>
                        <FormButton type = 'submit'>Book</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default BookA
