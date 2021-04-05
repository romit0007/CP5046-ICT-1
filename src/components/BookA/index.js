import React from 'react'
import { FormLabel } from 'react-bootstrap'
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput'

const BookA = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to ='/'>BLM</Icon>
                <FormContent>
                    <Form action = '/'>
                        <FormH1>Book an appointment here</FormH1>
                        <FormLabel htmlFor='for'> First Name </FormLabel>
                        <FormCheckInput type = 'text' required/>
                        <FormLabel htmlFor='for'>Last Name</FormLabel>
                        <FormCheckInput type = 'text' required/>
                        <FormLabel htmlFor='for'>Mobile Number</FormLabel>
                        <FormCheckInput type = 'number' required/>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormCheckInput type = 'email' required/>
                        <FormLabel htmlFor='for'>Select your Doctor</FormLabel>
                        <FormCheckInput type = 'text' required/>
                        <FormButton type = 'submit'>Book</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default BookA
