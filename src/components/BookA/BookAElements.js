import styled from 'styled-components'

export const FormContainer = styled.div`
    margin-top: 15px;
`
export const FormWrap = styled.div`
`
export const FormTable = styled.div`
    display:flex;
`
export const FormColumn = styled.div`
    flex:50%;
`
export const FormLogo = styled.img`
`
export const FormH1 = styled.div`
    font-size: 30px;
    text-align: center;
    margin-top: -50px;
`
export const FormP1 = styled.div`
    font-size: 20px;
    text-align: center;
`
export const FormContent = styled.div`
    border: 3px solid black;
    background-color:black;
    padding-top:15px;
    
`
export const Form = styled.form`
   
`
export const FormLabel = styled.label`
    color: white;
    float: left;
    width:8em;
    display: block;

`
export const FormInput = styled.input`
height:24px;
width:50%;
`
export const FormButton = styled.button`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`

export const FormP = styled.p`
    padding-left:25px;
`
export const FormImage = styled.div`
    text-align: center
`