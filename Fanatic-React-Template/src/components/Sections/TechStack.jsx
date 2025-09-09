import React from "react";
import styled from "styled-components";
import AnimatedSection from "../Elements/AnimatedSection";

export default function TechStack() {
  return (
    <Wrapper id="tech-stack">
      <div className="lightBg" style={{ padding: "80px 0" }}>
        <div className="container">
          <AnimatedSection direction="up">
            <HeaderInfo>
              <h1 className="font40 extraBold">Our Technology Stack Powers Your Success</h1>
            </HeaderInfo>
          </AnimatedSection>
          <TechGrid className="flex">
            <AnimatedSection direction="up" delay={100}>
              <TechItem>
                <TechIcon>☁️</TechIcon>
                <TechTitle>Cloud Infrastructure</TechTitle>
                <TechDescription>Scalable, reliable deployments</TechDescription>
              </TechItem>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={200}>
              <TechItem>
                <TechIcon>💻</TechIcon>
                <TechTitle>Learning Management System</TechTitle>
                <TechDescription>Blackboard, Canvas, Moodle integrations</TechDescription>
              </TechItem>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={300}>
              <TechItem>
                <TechIcon>⚙️</TechIcon>
                <TechTitle>Custom Tech Stack</TechTitle>
                <TechDescription>Tailored solutions built for your institution</TechDescription>
              </TechItem>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={400}>
              <TechItem>
                <TechIcon>🗄️</TechIcon>
                <TechTitle>Databases</TechTitle>
                <TechDescription>Secure, high-performance data management</TechDescription>
              </TechItem>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={500}>
              <TechItem>
                <TechIcon>🌐</TechIcon>
                <TechTitle>Web Frameworks</TechTitle>
                <TechDescription>Flexible and modern development frameworks</TechDescription>
              </TechItem>
            </AnimatedSection>
          </TechGrid>
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
    background: rgba(248, 249, 250, 0.98);
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

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  @media (max-width: 860px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
  }
`;

const TechItem = styled.div`
  text-align: center;
  padding: 30px 20px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 249, 250, 0.8) 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, transparent 50%, rgba(255, 255, 255, 0.1) 100%);
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
    transition: left 0.5s;
  }
  
  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.9) 100%);
  }
  
  &:hover::after {
    left: 100%;
  }
  
  &:active {
    transform: translateY(-5px) scale(1.02);
  }
`;

const TechIcon = styled.div`
  font-size: 48px;
  margin-bottom: 20px;
  display: block;
  transition: all 0.3s ease;
  
  ${TechItem}:hover & {
    transform: scale(1.3) rotate(10deg);
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
  }
`;

const TechTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 10px;
  line-height: 1.3;
`;

const TechDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.4;
  margin: 0;
`;
