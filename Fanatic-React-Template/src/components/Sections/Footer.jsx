import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoImg from "../../assets/svg/Logo";

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <MainFooter>
            <FooterTop>
              <FooterColumn>
                <FooterBrand>
                  <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
                    <LogoImg />
                  </Link>
                  <BrandDescription>
                    Empowering universities with future-ready digital solutions. 
                    Transform your institution with our comprehensive technology stack.
                  </BrandDescription>
                  <SocialLinks>
                    <SocialLink href="#" aria-label="LinkedIn">
                      <SocialIcon>💼</SocialIcon>
                    </SocialLink>
                    <SocialLink href="#" aria-label="Twitter">
                      <SocialIcon>🐦</SocialIcon>
                    </SocialLink>
                    <SocialLink href="#" aria-label="Facebook">
                      <SocialIcon>📘</SocialIcon>
                    </SocialLink>
                    <SocialLink href="#" aria-label="YouTube">
                      <SocialIcon>📺</SocialIcon>
                    </SocialLink>
                  </SocialLinks>
                </FooterBrand>
              </FooterColumn>

              <FooterColumn>
                <FooterTitle>Solutions</FooterTitle>
                <FooterList>
                  <FooterItem>
                    <Link className="whiteColor animate pointer font13" to="services" smooth={true} offset={-80}>
                      Digital Ecosystems
                    </Link>
                  </FooterItem>
                  <FooterItem>
                    <Link className="whiteColor animate pointer font13" to="services" smooth={true} offset={-80}>
                      Student Workflows
                    </Link>
                  </FooterItem>
                  <FooterItem>
                    <Link className="whiteColor animate pointer font13" to="tech-stack" smooth={true} offset={-80}>
                      Technology Stack
                    </Link>
                  </FooterItem>
                  <FooterItem>
                    <Link className="whiteColor animate pointer font13" to="compliance" smooth={true} offset={-80}>
                      Compliance & Security
                    </Link>
                  </FooterItem>
                  <FooterItem>
                    <a href="#" className="whiteColor animate pointer font13">
                      AI & Automation
                    </a>
                  </FooterItem>
                </FooterList>
              </FooterColumn>

              <FooterColumn>
                <FooterTitle>Company</FooterTitle>
                <FooterList>
                  <FooterItem>
                    <Link className="whiteColor animate pointer font13" to="why-abm" smooth={true} offset={-80}>
                      Why ABM
                    </Link>
                  </FooterItem>
                  <FooterItem>
                    <a href="#" className="whiteColor animate pointer font13">
                      About Us
                    </a>
                  </FooterItem>
                  <FooterItem>
                    <a href="#" className="whiteColor animate pointer font13">
                      Our Team
                    </a>
                  </FooterItem>
                  <FooterItem>
                    <a href="#" className="whiteColor animate pointer font13">
                      Careers
                    </a>
                  </FooterItem>
                  <FooterItem>
                    <a href="#" className="whiteColor animate pointer font13">
                      Case Studies
                    </a>
                  </FooterItem>
                </FooterList>
              </FooterColumn>

              <FooterColumn>
                <FooterTitle>Resources</FooterTitle>
                <FooterList>
                  <FooterItem>
                    <a href="#" className="whiteColor animate pointer font13">
                      Documentation
                    </a>
                  </FooterItem>
                  <FooterItem>
                    <a href="#" className="whiteColor animate pointer font13">
                      API Reference
                    </a>
                  </FooterItem>
                  <FooterItem>
                    <a href="#" className="whiteColor animate pointer font13">
                      Help Center
                    </a>
                  </FooterItem>
                  <FooterItem>
                    <a href="#" className="whiteColor animate pointer font13">
                      Community
                    </a>
                  </FooterItem>
                  <FooterItem>
                    <a href="#" className="whiteColor animate pointer font13">
                      Blog
                    </a>
                  </FooterItem>
                </FooterList>
              </FooterColumn>

              <FooterColumn>
                <FooterTitle>Contact</FooterTitle>
                <ContactInfo>
                  <ContactItem>
                    <ContactIcon>📧</ContactIcon>
                    <ContactText>
                      <div>hello@abmtechnologies.com</div>
                      <div>support@abmtechnologies.com</div>
                    </ContactText>
                  </ContactItem>
                  <ContactItem>
                    <ContactIcon>📞</ContactIcon>
                    <ContactText>
                      <div>+1 (555) 123-4567</div>
                      <div>+1 (555) 987-6543</div>
                    </ContactText>
                  </ContactItem>
                  <ContactItem>
                    <ContactIcon>📍</ContactIcon>
                    <ContactText>
                      <div>123 Tech Street</div>
                      <div>San Francisco, CA 94105</div>
                    </ContactText>
                  </ContactItem>
                </ContactInfo>
              </FooterColumn>
            </FooterTop>

            <FooterBottom>
              <FooterBottomLeft>
                <Copyright>
                  © {getCurrentYear()} <span className="purpleColor">ABM Technologies</span>. All Rights Reserved.
                </Copyright>
                <LegalLinks>
                  <LegalLink href="#">Privacy Policy</LegalLink>
                  <LegalLink href="#">Terms of Service</LegalLink>
                  <LegalLink href="#">Cookie Policy</LegalLink>
                  <LegalLink href="#">GDPR Compliance</LegalLink>
                </LegalLinks>
              </FooterBottomLeft>
              <FooterBottomRight>
                <BackToTop>
                  <Link className="whiteColor animate pointer font13" to="home" smooth={true} offset={-80}>
                    <BackToTopIcon>⬆️</BackToTopIcon>
                    Back to top
                  </Link>
                </BackToTop>
              </FooterBottomRight>
            </FooterBottom>
          </MainFooter>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const MainFooter = styled.div`
  padding: 60px 0 30px 0;
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr;
  gap: 40px;
  margin-bottom: 40px;
  
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 25px;
  }
  
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const BrandDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(118, 32, 255, 0.8);
    transform: translateY(-2px);
  }
`;

const SocialIcon = styled.span`
  font-size: 18px;
`;

const FooterTitle = styled.h3`
  color: white;
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 20px 0;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FooterItem = styled.li`
  margin: 0;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const ContactIcon = styled.span`
  font-size: 16px;
  margin-top: 2px;
`;

const ContactText = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  line-height: 1.5;
  
  div {
    margin-bottom: 2px;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
`;

const FooterBottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Copyright = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  
  .purpleColor {
    color: #7620ff;
  }
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  
  @media (max-width: 550px) {
    justify-content: center;
    gap: 15px;
  }
`;

const LegalLink = styled.a`
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #7620ff;
  }
`;

const FooterBottomRight = styled.div`
  display: flex;
  align-items: center;
`;

const BackToTop = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(118, 32, 255, 0.8);
    transform: translateY(-2px);
  }
`;

const BackToTopIcon = styled.span`
  font-size: 14px;
`;