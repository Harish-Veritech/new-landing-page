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
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              <LogoImg />
              <h1 className="font15 extraBold whiteColor" style={{ marginLeft: "15px" }}>
                ABM Technologies
              </h1>
            </Link>
            <FooterLinks className="flexCenter">
              <Link className="whiteColor animate pointer font13" to="home" smooth={true} offset={-80}>
                About ABM
              </Link>
              <Link className="whiteColor animate pointer font13" to="services" smooth={true} offset={-80}>
                Solutions
              </Link>
              <Link className="whiteColor animate pointer font13" to="contact" smooth={true} offset={-80}>
                Contact
              </Link>
              <a href="#" className="whiteColor animate pointer font13">
                Privacy Policy
              </a>
            </FooterLinks>
            <ContactInfo className="whiteColor font13">
              <div>hello@abmtechnologies.com</div>
              <div>+1-XXX-XXX-XXXX</div>
            </ContactInfo>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} - <span className="purpleColor font13">ABM Technologies</span> All Rights Reserved
            </StyleP>

            <Link className="whiteColor animate pointer font13" to="home" smooth={true} offset={-80}>
              Back to top
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const FooterLinks = styled.div`
  gap: 30px;
  @media (max-width: 550px) {
    flex-direction: column;
    gap: 15px;
    margin: 20px 0;
  }
`;

const ContactInfo = styled.div`
  text-align: center;
  line-height: 1.5;
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;

const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;