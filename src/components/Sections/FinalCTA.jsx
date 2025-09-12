import React from "react";
import styled from "styled-components";
import FullButton from "../Buttons/FullButton";

export default function FinalCTA() {
  return (
    <Wrapper id="final-cta">
      <div className="darkBg" style={{ padding: "80px 0" }}>
        <div className="container">
          <CTAContent>
            <h1 className="font40 extraBold whiteColor">Let's Build the Future of Higher Education Together</h1>
            <p className="font16 whiteColor" style={{ margin: "30px 0 50px 0", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
              Ready to transform your university with cutting-edge digital solutions? 
              Schedule a demo or contact us to get started on your digital transformation journey.
            </p>
            <ButtonRow className="flexCenter">
              <ButtonWrapper>
                <FullButton 
                  title="Schedule a Demo" 
                  href="https://calendly.com/meet-abmtechnologies/30min" 
                  trackingEvent="Schedule Demo - Final CTA"
                />
              </ButtonWrapper>
              <ButtonWrapper>
                <FullButton title="Contact Us" border />
              </ButtonWrapper>
            </ButtonRow>
          </CTAContent>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const CTAContent = styled.div`
  text-align: center;
`;

const ButtonRow = styled.div`
  gap: 20px;
  @media (max-width: 560px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ButtonWrapper = styled.div`
  @media (max-width: 560px) {
    width: 100%;
    max-width: 200px;
  }
`;
