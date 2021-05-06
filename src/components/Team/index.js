import React from 'react'
import { TeamContainer, TeamH1, TeamWrapper, TeamCard, TeamIcon, TeamH2,
TeamP } from './TeamElements';
import M1 from '../../M1.jpeg'
import M2 from '../../M2.jpeg'
import M3 from '../../M3.jpeg'
import Aos from 'aos'
import 'aos/dist/aos.css';

const Team = () => {
    Aos.init({
        duration : 1200
    });
    return (
        <TeamContainer id = "team">
            <TeamH1 data-aos = "zoom-in">Our Team</TeamH1>
            <TeamWrapper>
                <TeamCard data-aos = "flip-up">
                    <TeamIcon src = {M1}/>
                    <TeamH2> Dr Virginia Oliviera </TeamH2>
                    <TeamP>
                    Virginia is a Fellow of the Royal Australian College of General Practitioners. She graduated in South Africa and has more than 20 years of medical experience.
                    </TeamP>
                </TeamCard>
                <TeamCard data-aos = "flip-up">
                    <TeamIcon src = {M2}/>
                    <TeamH2> Dr Nithi Anapayan </TeamH2>
                    <TeamP>
                    Nithi is a Fellow of the Royal Australian College of General Practitioners. She graduated in Sri Lanka 10 years ago.
                    </TeamP>
                </TeamCard>
                <TeamCard data-aos = "flip-down">
                    <TeamIcon src = {M3}/>
                    <TeamH2> Dr Sam Ibrahim </TeamH2>
                    <TeamP>
                    Sam is a Fellow of the Royal Australian College of GP with more than 25 years of medical experience.
                     He is also a senior lecturer at Griffith University School of Medicine, an examiner of the RACGP.
                    </TeamP>
                </TeamCard>
            </TeamWrapper>
        </TeamContainer>
    )
}

export default Team
