import React from "react";
import styled from "styled-components";
import FullButton from "../Buttons/FullButton";

export default function Compliance() {
  return (
    <Wrapper id="compliance">
      <div className="whiteBg" style={{ padding: "80px 0" }}>
        <div className="container">
          <ComplianceContent className="flexSpaceCenter">
            <LeftSide>
              <h1 className="font40 extraBold">Built for Scale, Security & Accessibility</h1>
              <ComplianceList>
                <ComplianceItem>
                  <CheckIcon>✓</CheckIcon>
                  <ItemText>
                    <strong>Accessibility & Compliance:</strong> WCAG 2.2 AA, GDPR, FERMA
                  </ItemText>
                </ComplianceItem>
                <ComplianceItem>
                  <CheckIcon>✓</CheckIcon>
                  <ItemText>
                    <strong>Platform Customization:</strong> Custom dashboards, advanced reporting, actionable insights
                  </ItemText>
                </ComplianceItem>
                <ComplianceItem>
                  <CheckIcon>✓</CheckIcon>
                  <ItemText>
                    <strong>Security & Privacy:</strong> End-to-end encryption, data residency in U.S.
                  </ItemText>
                </ComplianceItem>
              </ComplianceList>
              <ButtonWrapper>
                <FullButton title="Learn About Compliance" />
              </ButtonWrapper>
            </LeftSide>
            <RightSide>
              <SecurityVisual>
                <MonitorIcon>🖥️</MonitorIcon>
                <SecurityIcons>
                  <SecurityIcon>🔓</SecurityIcon>
                  <SecurityIcon>🛡️</SecurityIcon>
                </SecurityIcons>
              </SecurityVisual>
            </RightSide>
          </ComplianceContent>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const ComplianceContent = styled.div`
  @media (max-width: 960px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LeftSide = styled.div`
  width: 60%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
  }
`;

const RightSide = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;

const ComplianceList = styled.div`
  margin: 40px 0;
`;

const ComplianceItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
  padding: 20px;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(248, 249, 250, 0.6) 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 50%, rgba(255, 255, 255, 0.1) 100%);
    border-radius: inherit;
    pointer-events: none;
  }
  
  &:hover {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 249, 250, 0.8) 100%);
    transform: translateX(10px) translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
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
  transition: all 0.3s ease;
  
  ${ComplianceItem}:hover & {
    transform: scale(1.3) rotate(360deg);
    background: #20c997;
    box-shadow: 0 4px 12px rgba(32, 201, 151, 0.3);
  }
`;

const ItemText = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  
  strong {
    color: #2c3e50;
  }
`;

const ButtonWrapper = styled.div`
  max-width: 250px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;

const SecurityVisual = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MonitorIcon = styled.div`
  font-size: 120px;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1) rotate(5deg);
    filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2));
  }
`;

const SecurityIcons = styled.div`
  display: flex;
  gap: 20px;
  position: absolute;
  bottom: 20px;
`;

const SecurityIcon = styled.div`
  font-size: 32px;
  background: white;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.2) rotate(360deg);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  }
  
  &:nth-child(1):hover {
    background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
    color: white;
  }
  
  &:nth-child(2):hover {
    background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
    color: white;
  }
`;
