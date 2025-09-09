import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import HeaderImage from "../../assets/img/hero-image.webp";
import QuotesIcon from "../../assets/svg/Quotes";

export default function Header() {
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">Empowering Universities with Future-Ready Digital Solutions</h1>
          <HeaderP className="font13 semiBold">
            Transform your university into a connected, scalable, and high-performing digital ecosystem.
          </HeaderP>
          <BtnWrapper>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <FullButton title="Schedule a Demo" />
              <FullButton title="Contact Us" border />
            </div>
          </BtnWrapper>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img className="radius8" height={500} src={HeaderImage} alt="office" style={{zIndex: 9}} />
          <QuoteWrapper className="flexCenter darkBg radius8">
            <QuotesWrapper>
              <QuotesIcon />
            </QuotesWrapper>
            <div>
              <p className="font15 whiteColor">
                <em>71% of the top 100 universities use Drupal — future-proof your institution with scalable, reliable tech.</em>
              </p>
              <p className="font13 orangeColor textRight" style={{marginTop: '10px'}}>Industry Leading Platform</p>
            </div>
          </QuoteWrapper>
        </ImageWrapper>
      </RightSide>
    </Wrapper>
  );
}


const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  position: relative;
  background: 
    linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, transparent 100%),
    url('./assets/img/dots-dark.svg') no-repeat center center / cover;
  
  > * {
    position: relative;
    z-index: 2;
  }
  
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  
  h1 {
    animation: titleGlow 3s ease-in-out infinite alternate;
  }
  
  @keyframes titleGlow {
    0% {
      text-shadow: 0 0 5px rgba(118, 32, 255, 0.3);
    }
    100% {
      text-shadow: 0 0 20px rgba(118, 32, 255, 0.6), 0 0 30px rgba(118, 32, 255, 0.4);
    }
  }
  
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 400px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
  
  div {
    transition: all 0.3s ease;
  }
  
  div:hover {
    transform: translateY(-2px);
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
  
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;


