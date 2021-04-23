import React from 'react'

const Mservices = () => {
  return (
    <>
      <MservicesContainer id="Mservices">
        <MservicesBg>
          <img src="/">
        </MservicesBg>
        <MservicesContent>

          <MservicesH1>
            Our Services
          </MservicesH1>
          <MservicesP>
            We offer Awide range of general medical services
          </MservicesP>
        </MservicesContent>
        <MservicesCHolder>
          <MservicesWrapper>
            <MservicesCard>
              <MservicesIcon />
                <MservicesH2>Chronic Diseases Management</MservicesH2>
                  <MservicesP>
                    Diabetes and Thyroid conditions Asthma, Emphysema, and COPD Hypertension,
                    High Cholesterol Heart Diseases Osteoarthritis.
                </MservicesP>
              </MservicesCard>
          </MservicesWrapper>
        </MservicesCHolder>
      </MservicesContainer>
    </>
  )
}

export default MyComponent
