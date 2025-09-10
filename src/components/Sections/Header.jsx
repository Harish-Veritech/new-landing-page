import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import HeaderImage from "../../assets/img/hero-image.webp";
import QuotesIcon from "../../assets/svg/Quotes";

export default function Header() {
  return (
    <Background>
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
            <Img className="radius8" height={450} src={HeaderImage} alt="office" style={{zIndex: 9}} />
            <QuoteWrapper className="flexCenter darkBg radius8">
              <QuotesWrapper>
                <QuotesIcon />
              </QuotesWrapper>
              <div>
                <p className="font15" style={{color: '#1a1a1a', fontWeight: 'bold', textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)'}}>
                  <em>71% of the top 100 universities use Drupal — future-proof your institution with scalable, reliable tech.</em>
                </p>
                <p className="font13 textRight" style={{marginTop: '10px', color: '#580cd2', fontWeight: '600', textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)'}}>Industry Leading Platform</p>
              </div>
            </QuoteWrapper>
          </ImageWrapper>
        </RightSide>
      </Wrapper>
    </Background>
  );
}


const Background = styled.section`
  padding-top: 80px;
  width: 100%;
  background: 
    linear-gradient(180deg, rgba(255, 255, 255, 1) 25%, transparent 100%),
    url('./assets/img/dots-dark.svg') no-repeat center center / cover;
  
  > * {
    position: relative;
    z-index: 2;
  }
  
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Wrapper = styled.div`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  
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
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(248, 249, 250, 0.7) 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(118, 32, 255, 0.4);
  box-shadow: 0 12px 40px rgba(118, 32, 255, 0.2);
  overflow: hidden;
  border-radius: 16px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(118, 32, 255, 0.08) 0%, rgba(88, 12, 210, 0.05) 50%, rgba(255, 255, 255, 0.1) 100%);
    border-radius: inherit;
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.6s;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 20px 50px rgba(118, 32, 255, 0.3);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 249, 250, 0.95) 100%);
    border-color: rgba(118, 32, 255, 0.6);
  }
  
  &:hover::before {
    background: linear-gradient(135deg, rgba(118, 32, 255, 0.12) 0%, rgba(88, 12, 210, 0.08) 50%, rgba(255, 255, 255, 0.15) 100%);
  }
  
  &:hover::after {
    left: 100%;
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


