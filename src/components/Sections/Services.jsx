import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/services/service-1.png";
import AddImage2 from "../../assets/img/services/service-2.png";
import AddImage3 from "../../assets/img/services/service-3.png";
import AddImage4 from "../../assets/img/services/service-4.png";

export default function Services() {
  return (
    <Wrapper id="services">
      <div className="lightBg" style={{ padding: "10px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Custom Solutions Built for Universities</h1>
            <p className="font13">
              Transform your university's digital infrastructure with our comprehensive suite of solutions
              <br />
              designed specifically for higher education institutions.
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="Custom, Connected Digital Ecosystems"
                subtitle="Integrated systems that connect your LMS, CRM, and campus operations into one smart digital twin."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="Student-First Workflows"
                subtitle="Multilingual onboarding, AI-powered chat, and mobile-first experiences that delight modern students."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="roller"
                title="Partnership Approach"
                subtitle="We work alongside your teams, tailoring technology solutions to match your institutional realities."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox 
                icon="printer" 
                title="AI & Automation" 
                subtitle="Intelligent chatbots, automated teaching assistants, and language companions to increase efficiency." 
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h4 className="font15 semiBold">Ready to Transform Your University?</h4>
                <h2 className="font40 extraBold">Explore Our Solutions</h2>
                <p className="font12">
                  Discover how our custom digital solutions can revolutionize your university's operations, 
                  enhance student experiences, and future-proof your institution for the digital age.
                </p>
                <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0"}}>
                  <div style={{ width: "200px" }}>
                    <FullButton title="Explore Our Solutions" action={() => alert("clicked")} />
                  </div>
                </ButtonsRow>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <AddImgWrapp1>
                    <img src={AddImage1} alt="Cloud Infrastructure & Tech Solutions" />
                  </AddImgWrapp1>
                  <AddImgWrapp2>
                    <img src={AddImage2} alt="Secure Digital Platform" />
                  </AddImgWrapp2>
                  <AddImgWrapp3>
                    <img src={AddImage3} alt="Data Analysis & Network Management" />
                  </AddImgWrapp3>
                  <AddImgWrapp4>
                    <img src={AddImage4} alt="Interactive Learning Environment" />
                  </AddImgWrapp4>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
  padding: 20px;
  background: linear-gradient(135deg, rgba(248, 249, 250, 0.8) 0%, rgba(255, 255, 255, 0.9) 100%);
  border-radius: 24px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 15px;
    padding: 15px;
  }
`;
const AddImgWrapp1 = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  grid-column: 1;
  grid-row: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(118, 32, 255, 0.1) 0%, rgba(88, 12, 210, 0.05) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 2;
    border-radius: inherit;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 25px 50px rgba(118, 32, 255, 0.25);
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
    transition: all 0.4s ease;
    filter: brightness(0.95) contrast(1.05);
  }
  
  &:hover img {
    filter: brightness(1.05) contrast(1.1) saturate(1.1);
    transform: scale(1.05);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  grid-column: 2;
  grid-row: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(118, 32, 255, 0.1) 0%, rgba(88, 12, 210, 0.05) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 2;
    border-radius: inherit;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 25px 50px rgba(118, 32, 255, 0.25);
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
    transition: all 0.4s ease;
    filter: brightness(0.95) contrast(1.05);
  }
  
  &:hover img {
    filter: brightness(1.05) contrast(1.1) saturate(1.1);
    transform: scale(1.05);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  grid-column: 1;
  grid-row: 2;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(118, 32, 255, 0.1) 0%, rgba(88, 12, 210, 0.05) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 2;
    border-radius: inherit;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 25px 50px rgba(118, 32, 255, 0.25);
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
    transition: all 0.4s ease;
    filter: brightness(0.95) contrast(1.05);
  }
  
  &:hover img {
    filter: brightness(1.05) contrast(1.1) saturate(1.1);
    transform: scale(1.05);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  grid-column: 2;
  grid-row: 2;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(118, 32, 255, 0.1) 0%, rgba(88, 12, 210, 0.05) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 2;
    border-radius: inherit;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 25px 50px rgba(118, 32, 255, 0.25);
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
    transition: all 0.4s ease;
    filter: brightness(0.95) contrast(1.05);
  }
  
  &:hover img {
    filter: brightness(1.05) contrast(1.1) saturate(1.1);
    transform: scale(1.05);
  }
`;