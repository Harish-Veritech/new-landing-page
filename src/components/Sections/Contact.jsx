import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import ContactImg1 from "../../assets/img/contact-1.png";
import ContactImg2 from "../../assets/img/contact-2.png";
import ContactImg3 from "../../assets/img/contact-3.png";

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Ready to Transform Your University?</h1>
            <p className="font13">
              Get in touch with our experts to discuss how ABM Technologies can help
              <br />
              revolutionize your university's digital infrastructure and student experience.
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form>
                <label className="font13">University/Institution Name:</label>
                <input type="text" id="institution" name="institution" className="font20 extraBold" />
                <label className="font13">Contact Person:</label>
                <input type="text" id="contact" name="contact" className="font20 extraBold" />
                <label className="font13">Email:</label>
                <input type="email" id="email" name="email" className="font20 extraBold" />
                <label className="font13">Phone:</label>
                <input type="tel" id="phone" name="phone" className="font20 extraBold" />
                <label className="font13">Tell us about your digital transformation needs:</label>
                <textarea rows="4" cols="50" id="message" name="message" className="font20 extraBold" placeholder="Describe your current challenges and what you hope to achieve..." />
              </Form>
              <SumbitWrapper className="flex">
                <div style={{ width: "220px" }}>
                  <FullButton title="Request Consultation" action={() => alert("Consultation requested!")} />
                </div>
              </SumbitWrapper>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div style={{ width: "50%" }} className="flexNullCenter flexColumn">
                <ContactImgBox>
                  <img src={ContactImg1} alt="Modern Office Environment" />
                </ContactImgBox>
                <ContactImgBox>
                  <img src={ContactImg2} alt="Team Collaboration Space" />
                </ContactImgBox>
              </div>
              <div style={{ width: "50%" }}>
                <div style={{ marginTop: "100px" }}>
                  <ContactImgBoxLarge>
                    <img src={ContactImg3} alt="Innovative Technology Solutions" />
                  </ContactImgBoxLarge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  
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
    transform: translateY(-8px) scale(1.05);
    box-shadow: 0 25px 50px rgba(118, 32, 255, 0.25);
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  img {
    width: 180px;
    height: 180px;
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
  
  @media (max-width: 860px) {
    margin: 10px auto;
    align-self: center;
  }
`;
const ContactImgBoxLarge = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  
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
    width: 278px;
    height: 330px;
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
  
  @media (max-width: 860px) {
    margin: 20px auto;
    text-align: center;
    
    img {
      width: 100%;
      max-width: 278px;
      height: auto;
    }
  }
`;

const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;









