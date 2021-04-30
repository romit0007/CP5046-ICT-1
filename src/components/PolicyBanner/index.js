import React from 'react'
import Banner from '../../../src/Services-banner1.jpg'
import {PageContainer, PageBg, PageH1} from './PageBannerElements'

const PageBanner = () => {
    return (
        <PageContainer>
            <PageBg src = {Banner}></PageBg>
            <PageH1>Privacy & Policy</PageH1>
        </PageContainer>
    )
}

export default PageBanner
