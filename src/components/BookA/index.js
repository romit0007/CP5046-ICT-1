import React from 'react'
// import DateTimePicker from 'react-datetime-picker';
import {FormContainer, FormWrap, FormContent, Form, FormButton, FormInput, FormLabel } from './BookAElements'
import {FormTable, FormColumn, FormLogo, FormH1, FormP} from './BookAElements'



const BookAElements = () => {
    // const [value, Onchange] = useState();
    return (
        <FormContainer>
            <FormWrap>
                <FormTable>
                    <FormColumn>
                        <FormLogo src= ''></FormLogo>
                        <FormH1>
                            Best Life Medicals
                        </FormH1>
                        <FormP>
                            Book an appointment for you and your family wellbeing.
                        </FormP>
                    </FormColumn>
                    <FormColumn>
                        <FormContent>
                            <Form action = '/'>
                                <FormLabel htmlFor='for'> First Name </FormLabel>
                                <FormInput type = 'text' required/>
                                <FormLabel htmlFor='for'>Last Name</FormLabel>
                                <FormInput type = 'text' required/>
                                <FormLabel htmlFor='for'>Mobile Number</FormLabel>
                                <FormInput type = 'number' required/>
                                <FormLabel htmlFor='for'>Email</FormLabel>
                                <FormInput type = 'email' required/>
                                {/* <DateTimePicker Onchange = {Onchange}
                                value = {value}/> */}
                                <FormLabel htmlFor='for'>Select your Doctor</FormLabel>
                                <FormInput type = 'text' required/>
                                <FormButton type = 'submit'>Book</FormButton>
                            </Form>
                        </FormContent>
                    </FormColumn>
                </FormTable>
            </FormWrap>
        </FormContainer>
    )
}

export default BookAElements
