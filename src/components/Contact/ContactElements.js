import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ContactContainer = styled.div`
    margin-top: 60px;
    height:750px;
    width:1100px;
    display: flex;
    justify-content:center;
    align-items:center;
    margin: 0 auto;
    border-style: 5px solid;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
    background-color: #f3f7f2;
`
export const ContactTable = styled.div`
    display:flex
`
export const ContactColumn = styled.div`
    flex:50%;
    padding: 100px;
`
export const ContactH2 = styled.h2`
    font-size: 25px;
    display: flex;
    text-align:center;
    justify-content: center;
    margin: 0 auto;
`
export const FormH2 = styled.h2`
    font-size: 25px;
    display: flex;
    text-align:center;
    justify-content: center;
    margin: 0 auto;
`

export const FormContent = styled.div`
    height:100%;
    display:flex;
    flex-direction:row;
    justify-content:left;
    
    @media screen and (max-width: 480px){
        padding:10px;
    }  
`

export const Form = styled.form`
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 25px 32px;

    @media screen and (max-width: 400px){
        padding: 32px 2px;
    }
`
export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: black;
`
export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: 10;
    border-radius: 4px;
    border-color: black;
    background-color: #DCDCDC;
`
export const FormButton = styled(Link)`

`

export const ContactContent = styled.div`
    margin: 0 auto;
`
export const ContactAddress = styled.div``
export const ContactEmail = styled.div``
export const ContactPhone = styled.div``