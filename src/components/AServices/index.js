import React from 'react'
// import {AContainer, AContent, AH1, AWrapper, ACard, AIcon, AH2, AP} from './AServicesElements'
// import Banner from '../../../src/Services-banner1.jpg'
import {AServicesContainer, AServicesCard, AServicesH2, AServicesIcon, AServicesWrapper, AServicesP} from './AServicesElements'
import Img1 from '../../chronic1.jpg'
import Img2 from '../../MAW.jpg'
import Img3 from '../../child1.jpg'
import Img4 from '../../skin care.jpg'
import Img5 from '../../telehealth.jpg'
import Img6 from '../../Health assessment.jpg'
const AServices = () => {
    return (
        <AServicesContainer id = "services">
            <AServicesWrapper>
                <AServicesCard>
                    <AServicesIcon src = {Img1}/>
                    <AServicesH2> Chronic Diseases Management </AServicesH2>
                    <AServicesP>
                        Diabetes and Thyroid conditions Asthma, Emphysema, and COPD Hypertension, 
                        High Cholesterol Heart Diseases Osteoarthritis, 
                        Rheumatoid arthritis,Osteoporosis 
                        Obesity and weight management
                    </AServicesP>
                </AServicesCard>
                <AServicesCard>
                    <AServicesIcon src = {Img2}/>
                    <AServicesH2> Women's and Men's Health </AServicesH2>
                    <AServicesP>
                        Reproductive and sexual health, 
                        Infertility Contraception and family planning,
                        Cervical Screening, Pap smears, 
                        Menopause, post menopausal conditions,
                        Ante-natal, post- natal follow up
                    </AServicesP>
                </AServicesCard>
                <AServicesCard>
                    <AServicesIcon src = {Img3}/>
                    <AServicesH2> Child and Adolescents Health </AServicesH2>
                    <AServicesP>
                        Vaccinations Healthy Kids Check Development, 
                        DelaysBehaviour disordersAdolescent medicine Acne
                    </AServicesP>
                </AServicesCard>
                <AServicesCard>
                    <AServicesIcon src = {Img4} />
                    <AServicesH2> Skin Cancers </AServicesH2>
                    <AServicesP>
                    Full Skin Cancer Checks, Skin Biopsies, Skin Cancer Surgery and Flaps
                    </AServicesP>
                </AServicesCard>
                <AServicesCard>
                    <AServicesIcon src = {Img5}/>
                    <AServicesH2> Tele health </AServicesH2>
                    <AServicesP>
                        We offer telehealth consults for our patients, where suitable and possible
                    </AServicesP>
                </AServicesCard>
                <AServicesCard>
                    <AServicesIcon src = {Img6}/>
                    <AServicesH2> Health Assessment </AServicesH2>
                    <AServicesP>
                    Health Assessments, New Baby Check Up, 4 Year Old Healthy Kids Check Up , 45 - 49 Year Old Health Assessment,
                    75 Year Old Health Assessment, Aboriginal Health Assessment
                    </AServicesP>
                </AServicesCard>
            </AServicesWrapper>
        </AServicesContainer>
    )
}

export default AServices
