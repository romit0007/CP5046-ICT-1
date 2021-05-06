import React from 'react'
// import DateTimePicker from 'react-datetime-picker';
import {FormContainer, FormWrap, FormContent, Form, FormButton, FormInput, FormLabel } from './BookAElements'
import {FormTable, FormColumn, FormLogo, FormH1, FormP, FormP1, FormImage} from './BookAElements'

import Logo from '../../../src/logo.png'



const BookAElements = () => {
    // const [value, Onchange] = useState();
    return (
        <FormContainer>
            <FormWrap>
                <FormTable>
                    <FormColumn>
                        <FormImage><FormLogo src= {Logo}></FormLogo></FormImage>
                        <FormH1>
                            Best Life Medicals
                        </FormH1>
                        <FormP1>
                            Book an appointment for you and your family wellbeing.
                        </FormP1>
                    </FormColumn>
                    <FormColumn>
                        <FormContent>
                            <Form action = '/'>
                                
                            <FormP>
                                <FormLabel htmlFor='for'> First Name </FormLabel>
                                <FormInput type = 'text' required/>
                                </FormP><FormP>
                                <FormLabel htmlFor='for'>Last Name</FormLabel>
                                <FormInput type = 'text' required/>
                                </FormP><FormP>
                                <FormLabel htmlFor='for'>Mobile Number</FormLabel>
                                <FormInput type = 'number' required/>
                                </FormP><FormP>
                                <FormLabel htmlFor='for'>Email</FormLabel>
                                <FormInput type = 'email' required/>
                                {/* <DateTimePicker Onchange = {Onchange}
                                value = {value}/> */}
                                </FormP><FormP>
                                <FormLabel htmlFor='for'>Select your Doctor</FormLabel>
                                <FormInput type = 'text' required/>
                                </FormP><FormP>
                                <FormButton type = 'submit'>Book</FormButton>
                                </FormP>
                            </Form>
                        </FormContent>
                    </FormColumn>
                </FormTable>
                <FormTable>
                    <FormP1>
                            You have flu like symptoms (sore throat, fever, cough, fatigue, shortness of breath) and have recently travelled overseas or have had contact with a confirmed case of Coronavirus. Please call the clinic during opening hours to report your symptoms or call 13HEALTH (13 43 26 84) or The Prince Charles Hospital 3139 4000 during out of office hours.
                            Online bookings are for standard consultations only. If you require a long appointment, procedure or any service that requires a nurse, please call the clinic on 07 3354 1900.
                    </FormP1>
                </FormTable>
            </FormWrap>
        </FormContainer>
    )
}

export default BookAElements
