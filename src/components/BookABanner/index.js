import React from 'react'
import Banner from '../../../src/covid-banner.jpeg'
import {BookABannerContainer, BookABannerBg, BookABannerH1} from './BookABannerElements'

const BookABanner = () => {
    return (
        <BookABannerContainer>
            <BookABannerBg src = {Banner}></BookABannerBg>
            <BookABannerH1></BookABannerH1>
        </BookABannerContainer>
    )
}

export default BookABanner
