import React from 'react'
import { TeamContainer, TeamH1, TeamWrapper, TeamCard, TeamIcon, TeamH2,
TeamP } from './TeamElements';

const Team = () => {
    return (
        <TeamContainer id = "Team">
            <TeamH1>Our Team</TeamH1>
            <TeamWrapper>
                <TeamCard>
                    <TeamIcon />
                    <TeamH2> Dr Virginia Oliviera </TeamH2>
                    <TeamP>
                    Virginia is a Fellow of the Royal Australian College of General Practitioners. She graduated in South Africa and has more than 20 years of medical experience. Besides speaking English she is also fluent in Portuguese & Afrikaans. 
                    She looks forward to getting to know her patients and being given the opportunity to providing quality family care.
                    </TeamP>
                </TeamCard>
                <TeamCard>
                    <TeamIcon />
                    <TeamH2> Dr Nithi Anapayan </TeamH2>
                    <TeamP>
                    Nithi is a Fellow of the Royal Australian College of General Practitioners. She graduated in Sri Lanka 10 years ago, She has numerous medical experiences throughout SE QLD hospitals,
                     She also hold a Diploma in Child Health. 
                     Her Interests include antenatal care, women's health, paediatrics, mental health and preventive medicine. 
                    </TeamP>
                </TeamCard>
                <TeamCard>
                    <TeamIcon />
                    <TeamH2> Dr Sam Ibrahim </TeamH2>
                    <TeamP>
                    Sam is a Fellow of the Royal Australian College of GP with more than 25 years of medical experience.
                     He graduated from Egypt, then obtained two Master Degrees.
                    He moved to Australia in 2007 and obtained his Australian Fellowship in 2008.
                     He is also a senior lecturer at Griffith University School of Medicine, an examiner of the RACGP and an accredited trainer.
                    </TeamP>
                </TeamCard>
            </TeamWrapper>
        </TeamContainer>
    )
}

export default Team
