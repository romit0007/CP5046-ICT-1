import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap ,Img, BtnLink } from './InfoElements'


const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2, buttonClick}) => {
    Aos.init({
        duration : 1200
    });
    return (
        <>
          <InfoContainer lightBg ={ lightBg} id = {id}>
              <InfoWrapper>
                  <InfoRow imgStart ={imgStart}>
                      <Column1 data-aos = "fade-right">
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText = {lightText} >{headline}</Heading>
                            <Subtitle darkText= {darkText} >{description}</Subtitle>
                            <BtnLink to = {buttonClick}
                                duration = {500}
                                spy = {true}
                                // exact = {true}
                                offset = {-80}
                                primary = {primary ? 1 : 0}
                                dark = {dark ? 1 : 0}
                                dark2 = {dark2 ? 1 : 0}
                                > {buttonLabel}
                            </BtnLink>
                        </TextWrapper>
                      </Column1>
                      <Column2 data-aos = "fade-right">
                        <ImgWrap>
                            <Img src = {img} alt={alt} />
                        </ImgWrap>
                      </Column2>
                  </InfoRow>
              </InfoWrapper>
          </InfoContainer>  
        </>
    )
}

export default InfoSection
