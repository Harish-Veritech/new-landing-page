import React from "react";
import styled from "styled-components";
import FullButton from "../Buttons/FullButton";

export default function Risks() {
  return (
    <Wrapper id="risks">
      <div className="lightBg" style={{ padding: "80px 0" }}>
        <div className="container">
          <RisksContent className="flexSpaceCenter">
            <LeftSide>
              <h1 className="font40 extraBold">Why Wait? The Risks of Fragmented Systems</h1>
              <RisksList>
                <RiskItem>
                  <RiskIcon>⚠️</RiskIcon>
                  <RiskText>
                    Lose prospective international students to tech-savvy competitors
                  </RiskText>
                </RiskItem>
                <RiskItem>
                  <RiskIcon>⚠️</RiskIcon>
                  <RiskText>
                    Higher administrative costs from manual, inefficient processes
                  </RiskText>
                </RiskItem>
                <RiskItem>
                  <RiskIcon>⚠️</RiskIcon>
                  <RiskText>
                    Declining student satisfaction as expectations for digital interaction rise
                  </RiskText>
                </RiskItem>
              </RisksList>
              <Banner>
                <BannerText>
                  <strong>71% of the top 100 universities use Drupal</strong> — future-proof your institution with scalable, reliable tech.
                </BannerText>
              </Banner>
              <ButtonWrapper>
                <FullButton title="Talk to an Expert Today" />
              </ButtonWrapper>
            </LeftSide>
            <RightSide>
              <VisualElements>
                <PersonIcon>👩‍💼</PersonIcon>
                <NetworkIcon>📊</NetworkIcon>
              </VisualElements>
            </RightSide>
          </RisksContent>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const RisksContent = styled.div`
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

const RisksList = styled.div`
  margin: 40px 0;
`;

const RiskItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 25px;
  padding: 20px;
  background: #fff5f5;
  border-left: 4px solid #e53e3e;
  border-radius: 8px;
`;

const RiskIcon = styled.div`
  font-size: 24px;
  flex-shrink: 0;
  margin-top: 2px;
`;

const RiskText = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: #333;
`;

const Banner = styled.div`
  background: #2c3e50;
  color: white;
  padding: 20px;
  border-radius: 8px;
  margin: 30px 0;
  text-align: center;
`;

const BannerText = styled.div`
  font-size: 16px;
  line-height: 1.5;
  
  strong {
    color: #f39c12;
  }
`;

const ButtonWrapper = styled.div`
  max-width: 250px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;

const VisualElements = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const PersonIcon = styled.div`
  font-size: 80px;
  background: white;
  padding: 20px;
  border-radius: 50%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const NetworkIcon = styled.div`
  font-size: 60px;
  background: white;
  padding: 15px;
  border-radius: 50%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;
