import React from 'react'
import {PolicyContainer, PolicyH1, PolicyTable, PolicyColumn, PolicyH2, PolicyP} from './PolicyElements'

const APolicy = () => {
    return (
        <PolicyContainer>
            <PolicyH1>This is our Agreement with you</PolicyH1>
            <PolicyTable>
                <PolicyColumn>
                    <PolicyH2>Appointments</PolicyH2>
                    <PolicyP>Each appointment is for one patient only, and is scheduled to discuss only one medical issue. 
                        If you have more than one medical issue to discuss, please ask our receptionist so we can book for you a longer appointment</PolicyP>
                </PolicyColumn>
                <PolicyColumn>
                    <PolicyH2>Referrals & Ccripts</PolicyH2>
                    <PolicyP>To follow Medicare guidelines, patients have to attend for the service they want, 
                        e.g. referrals and/or Scripts, we can't do services without the patient attendance or over the phone.</PolicyP>
                </PolicyColumn>
            </PolicyTable>    
            <PolicyTable>
                <PolicyColumn>
                    <PolicyH2>Results</PolicyH2>
                    <PolicyP>If the doctor referred you for investigations, you need to make a follow up appointment with the referring GP, 3-7 days after having your investigations done to discuss your results. 
                        It is your responsibility to come to follow up & discuss the results with the doctor.</PolicyP>
                </PolicyColumn>
                <PolicyColumn>
                    <PolicyH2>Fees</PolicyH2>
                    <PolicyP>
                    The practice bulk bills medical consultations for patients with a valid Medicare card or DVA card. 
                    Some Services Can't be bulked billed to Medicare, Our receptionist can advise you of costs of these services.
                    </PolicyP>
                </PolicyColumn>
            </PolicyTable>
            <PolicyTable>
                <PolicyColumn>
                    <PolicyH2>Privacy policy</PolicyH2>
                    <PolicyP>It is the policy of the practice to maintain security of personal health information at all time. 
                        A privacy policy information sheet is available, you can request it from our reception staff.</PolicyP>
                </PolicyColumn>
                <PolicyColumn>
                    <PolicyH2>Recalls & Reminders</PolicyH2>
                    <PolicyP>As part of our commitment to preventive health, patients may receive reminder letters or messages. We also participates in national reminders systems such as the Pap Smear and Immunisation registers. 
                        If you do not wish to participate in these reminder systems please notify the reception.</PolicyP>
                </PolicyColumn>
            </PolicyTable>
            <PolicyTable>
                <PolicyColumn>
                    <PolicyH2>Behaviour</PolicyH2>
                    <PolicyP>Verbal and/or physical abuse toward our staff is not tolerated and any patient displaying inappropriate behavior will be asked to leave permanently the practice. 
                        Doctors in this practice don’t prescribe S8 medication to new patients without obtaining prior full medical information and getting approval from DDU QLD.</PolicyP>
                </PolicyColumn>
                <PolicyColumn>
                    <PolicyH2>Cancellation Policy</PolicyH2>
                    <PolicyP>It is courteous and ethical that If you are not able to keep your appointment, or you don't need it, please phone our receptionist to reschedule or cancel it. 
                        If a patient didn't show up for their appointment, without cancelling/rescheduling their appointment, cancellation fees will apply, and if this is repeated we will not be able to bulk bill this patient any more.</PolicyP>
                </PolicyColumn>
            </PolicyTable>
        </PolicyContainer>
    )
}

export default APolicy