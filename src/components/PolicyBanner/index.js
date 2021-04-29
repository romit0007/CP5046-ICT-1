import React from 'react'
import Banner from '../../../src/Policy-banner.jpg'
import {PageContainer, PageBg, PageH1} from './PageBannerElements'

const PageBanner = () => {
    return (
        <PageContainer>
            <PageBg src = {Banner}></PageBg>
            <PageH1>Policy</PageH1>
        </PageContainer>
    )
}

export default PageBanner
