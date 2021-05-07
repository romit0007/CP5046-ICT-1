import React, {useState} from 'react'
// import DateTimePicker from 'react-datetime-picker';
import {FormContainer, FormWrap, FormContent, Form, FormButton, FormInput, FormLabel } from './BookAElements'
import {FormTable, FormColumn, FormLogo, FormH1, FormP, FormP1, FormImage} from './BookAElements'

import Logo from '../../../src/logo.png'


const url = 'http://localhost:4000'

const BookA = () => {
    // const [value, Onchange] = useState();

    const [appointmentInfo, setAppointmentInfo] = useState({});

    const handleChange = ({target}) => {
        const {name, value} = target;
        console.log(appointmentInfo);
        if(!name) return;
        setAppointmentInfo({
            ...appointmentInfo,
            [name]:value
        });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const res =  await fetch(`${url}/events`,
            {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(appointmentInfo) 
        })
        const incomingRes = await res.json();
        console.log(incomingRes);
    }
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
                            <Form onSubmit = {handleSubmit}>
                                
                            <FormP>
                                <FormLabel htmlFor='for'> First Name </FormLabel>
                                <FormInput type = 'text' onChange = {handleChange} name ='firstName' required/>
                                </FormP><FormP>
                                <FormLabel htmlFor='for'>Last Name</FormLabel>
                                <FormInput type = 'text' onChange = {handleChange} name ='lastName' required/>
                                </FormP><FormP>
                                <FormLabel htmlFor='for'>Mobile Number</FormLabel>
                                <FormInput type = 'number' onChange = {handleChange} name = 'number' required/>
                                </FormP><FormP>
                                <FormLabel htmlFor='for'>Purpose of Visit</FormLabel>
                                <FormInput type = 'text' onChange = {handleChange} name ='purpose' required/>
                                {/* <DateTimePicker Onchange = {Onchange}
                                value = {value}/> */}
                                </FormP>
                                <FormP>
                                <FormLabel htmlFor='for'> Select Date and Time</FormLabel>
                                <FormInput type = 'datetime-local' name ='dateTime' onChange = {handleChange} required/>
                                </FormP>    
                                <FormP></FormP>
                                <FormP>
                                <FormLabel htmlFor='for'>Select your Doctor</FormLabel>
                                <FormInput type = 'text' onChange = {handleChange} name ='doctor' required/>
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

export default BookA
