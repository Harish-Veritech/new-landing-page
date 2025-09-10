import React from "react";
import styled from "styled-components";
import AnimatedSection from "../Elements/AnimatedSection";

export default function WhyABM() {
  return (
    <Wrapper id="why-abm">
      <div className="whiteBg" style={{ padding: "80px 0" }}>
        <div className="container">
          <AnimatedSection direction="up">
            <HeaderInfo>
              <h1 className="font40 extraBold">Trusted by Global Institutions</h1>
              <p className="font16" style={{ marginTop: '20px', color: '#666', maxWidth: '800px', margin: '20px auto 0' }}>
                With over a decade of experience transforming digital ecosystems, ABM Technologies has become the trusted partner for universities and institutions worldwide. Our proven track record, deep technical expertise, and commitment to excellence make us the ideal choice for your digital transformation journey.
              </p>
            </HeaderInfo>
          </AnimatedSection>
          <TrustGrid className="flex">
            <AnimatedSection direction="up" delay={100}>
              <TrustItem>
                <CheckIcon>✓</CheckIcon>
                <TrustText>
                  <strong>500+ Global Projects</strong> across Education, Finance, Healthcare, and SaaS sectors. Our extensive portfolio includes digital transformations for major universities, financial institutions, healthcare systems, and technology companies worldwide, demonstrating our ability to deliver complex, mission-critical solutions at scale.
                </TrustText>
              </TrustItem>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={200}>
              <TrustItem>
                <CheckIcon>✓</CheckIcon>
                <TrustText>
                  <strong>Proven Scalable, Secure Solutions</strong> built with enterprise-grade security, compliance standards, and performance optimization. Our solutions handle millions of users, process vast amounts of data, and maintain 99.9% uptime while meeting strict security requirements including GDPR, FERPA, and SOC 2 compliance.
                </TrustText>
              </TrustItem>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={300}>
              <TrustItem>
                <CheckIcon>✓</CheckIcon>
                <TrustText>
                  <strong>Deep Expertise in Custom Integrations</strong> with 15+ years of experience connecting disparate systems, APIs, and platforms. We specialize in seamless integration of LMS, CRM, SIS, payment gateways, and third-party services, ensuring your technology ecosystem works as one unified, intelligent platform.
                </TrustText>
              </TrustItem>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={400}>
              <TrustItem>
                <CheckIcon>✓</CheckIcon>
                <TrustText>
                  <strong>71% of Top 100 Universities</strong> trust Drupal as their content management platform. We're certified Drupal experts with deep knowledge of the platform's capabilities, security features, and scalability options, ensuring your institution benefits from the industry's most robust and flexible open-source solution.
                </TrustText>
              </TrustItem>
            </AnimatedSection>
          </TrustGrid>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  position: relative;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><defs><pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="15" cy="15" r="1" fill="%23000" fill-opacity="0.05"/></pattern></defs><rect width="100%" height="100%" fill="url(%23dots)"/></svg>');
  background-repeat: repeat;
  background-size: 60px 60px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.98);
    z-index: 1;
  }
  
  > * {
    position: relative;
    z-index: 2;
  }
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
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 100%;
  }
`;

const TrustItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 20px;
  background: linear-gradient(135deg, rgba(248, 249, 250, 0.9) 0%, rgba(233, 236, 239, 0.8) 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  
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
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.9) 100%);
  }
  
  &:active {
    transform: translateY(-4px) scale(1.01);
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
  
  ${TrustItem}:hover & {
    transform: scale(1.2) rotate(360deg);
    background: #20c997;
  }
`;

const TrustText = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  
  strong {
    color: #2c3e50;
  }
`;
