import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2,
ServicesP, ServicesBtnLink } from './ServicesElements';
import Icon3 from '../../../src/child1.jpg'
import Icon2 from '../../../src/MAW.jpg'
import Icon1 from '../../../src/chronic1.jpg'

const Services = () => {
    return (
        <ServicesContainer id = "services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src = {Icon1}/>
                    <ServicesH2> Chronic Diseases Management </ServicesH2>
                    <ServicesP>
                        Diabetes and Thyroid conditions Asthma, Emphysema, and COPD Hypertension, 
                        High Cholesterol Heart Diseases Osteoarthritis, 
                        Rheumatoid arthritis,Osteoporosis 
                        Obesity and weight management
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src = {Icon2}/>
                    <ServicesH2> Women's and Men's Health </ServicesH2>
                    <ServicesP>
                        Reproductive and sexual health, 
                        Infertility Contraception and family planning,
                        Cervical Screening, Pap smears, 
                        Menopause, post menopausal conditions,
                        Ante-natal, post- natal follow up
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src = {Icon3}/>
                    <ServicesH2> Child and Adolescents Health </ServicesH2>
                    <ServicesP>
                        Vaccinations Healthy Kids Check Development, 
                        DelaysBehaviour disordersAdolescent medicine Acne
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
            <ServicesBtnLink to = '/Mservices'> More </ServicesBtnLink>
        </ServicesContainer>
    )
}

export default Services
