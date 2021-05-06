import React from 'react'
import Cimg from '../../covid-banner.png'
const Covid = () => {
    return (
        <CovidContainer id="services">
            <CovidWrapper>
                <CovidCard>
                    <CovidIcon src={Cimg} />
                    <CovidH2>  </CovidH2>
                    <p>COVID-19 UPDATE
                            <b>Mask updates - Brisbane, including Northern suburb and Central Coast.</b>

                            Further to this morning's press conference from the QLD premier,
                            masks are compulsory as a Condition of Entry for all clinics in
                            Brisbane, including Northern suburb and Central Coast (effective
                            immediately until 12:01 am Monday, May 20).

                            This is in the interest of both our customers' and team members'
                            safety, which remains our priority. Customers may remove their mask
                            whilst having a face treatment e.g. facials, microdermabrasion,
                            injectables. Face masks will also be mandatory for all staff.

                            Our Medical Advisory Committee has also recommended that
                            temperature checks are a condition of entry for all customers in our
                            clinics.

                            Please ensure you adhere to these government regulations upon
                            your visit to our clinics in these states.

                            At Best Life Medicals Australia, we remain committed to supporting all
                            our clients and team members throughout this ever-changing time.
                            We will continue to communicate with you during this period and provide
                            updates via our website.

                            For further questions, we can be contacted at infoblm@clinics.com.au

                            Please stay safe, take care, and thank you for your continued support.

                            Best Life Medicals Australia
                        </p>
                </CovidCard>
            </CovidWrapper>
        </CovidContainer>
    )
}