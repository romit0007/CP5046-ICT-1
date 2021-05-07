import React from 'react'
import Banner from '../../../src/covid-banner.jpeg'
import {CovidBannerContainer, CovidBannerBg, CovidBannerH1} from './CovidBannerElements'

const CovidBanner = () => {
    return (
        <CovidBannerContainer>
            <CovidBannerBg src = {Banner}></CovidBannerBg>
            <CovidBannerH1>COVID-19</CovidBannerH1>
        </CovidBannerContainer>
    )
}

export default CovidBanner
