import React from 'react'
import { TeamContainer, TeamH1, TeamWrapper, TeamCard, TeamIcon, TeamH2,
TeamP, TeamBtnLink } from './TeamElements';

const Team = () => {
    return (
        <TeamContainer id = "Team">
            <TeamH1>Our Team</TeamH1>
            <TeamWrapper>
                <TeamCard>
                    <TeamIcon />
                    <TeamH2> Chronic Diseases Management </TeamH2>
                    <TeamP>
                        Diabetes and Thyroid conditions Asthma, Emphysema, and COPD Hypertension, 
                        High Cholesterol Heart Diseases Osteoarthritis, 
                        Rheumatoid arthritis Other musculo-skeletal conditions Osteoporosis 
                        Obesity and weight management
                    </TeamP>
                </TeamCard>
                <TeamCard>
                    <TeamIcon />
                    <TeamH2> Women's and Men's Health </TeamH2>
                    <TeamP>
                        Reproductive and sexual health, 
                        Infertility Contraception and family planning,
                        Cervical Screening, Pap smears, 
                        Menopause, post menopausal conditions,
                        Ante-natal, post- natal follow up
                    </TeamP>
                </TeamCard>
                <TeamCard>
                    <TeamIcon />
                    <TeamH2> Child and Adolescents Health </TeamH2>
                    <TeamP>
                        Vaccinations Healthy Kids Check Development, 
                        DelaysBehaviour disordersAdolescent medicine Acne
                    </TeamP>
                </TeamCard>
            </TeamWrapper>
            <TeamBtnLink to = 'mTeam'> More </TeamBtnLink>
        </TeamContainer>
    )
}

export default Team
