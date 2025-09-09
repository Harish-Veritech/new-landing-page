import React from "react";
import styled from "styled-components";

export default function WhyABM() {
  return (
    <Wrapper id="why-abm">
      <div className="whiteBg" style={{ padding: "80px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Trusted by Global Institutions</h1>
          </HeaderInfo>
          <TrustGrid className="flex">
            <TrustItem>
              <CheckIcon>✓</CheckIcon>
              <TrustText>
                <strong>500+ Global Projects</strong> in Education, Finance, Healthcare, SaaS
              </TrustText>
            </TrustItem>
            <TrustItem>
              <CheckIcon>✓</CheckIcon>
              <TrustText>
                <strong>Proven Scalable, Secure Solutions</strong>
              </TrustText>
            </TrustItem>
            <TrustItem>
              <CheckIcon>✓</CheckIcon>
              <TrustText>
                <strong>Deep Expertise</strong> in Custom Integrations
              </TrustText>
            </TrustItem>
            <TrustItem>
              <CheckIcon>✓</CheckIcon>
              <TrustText>
                <strong>71% of Top 100 Universities</strong> Use Drupal – Industry's Leading Open-Source Platform
              </TrustText>
            </TrustItem>
          </TrustGrid>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const HeaderInfo = styled.div`
  text-align: center;
  margin-bottom: 60px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const TrustGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const TrustItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
`;

const CheckIcon = styled.div`
  background: #28a745;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  flex-shrink: 0;
  margin-top: 2px;
`;

const TrustText = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  
  strong {
    color: #2c3e50;
  }
`;
