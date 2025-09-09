import React from "react";
import styled from "styled-components";

export default function TechStack() {
  return (
    <Wrapper id="tech-stack">
      <div className="lightBg" style={{ padding: "80px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Technology Stack Powers Your Success</h1>
          </HeaderInfo>
          <TechGrid className="flex">
            <TechItem>
              <TechIcon>☁️</TechIcon>
              <TechTitle>Cloud Infrastructure</TechTitle>
              <TechDescription>Scalable, reliable deployments</TechDescription>
            </TechItem>
            <TechItem>
              <TechIcon>💻</TechIcon>
              <TechTitle>Learning Management System</TechTitle>
              <TechDescription>Blackboard, Canvas, Moodle integrations</TechDescription>
            </TechItem>
            <TechItem>
              <TechIcon>⚙️</TechIcon>
              <TechTitle>Custom Tech Stack</TechTitle>
              <TechDescription>Tailored solutions built for your institution</TechDescription>
            </TechItem>
            <TechItem>
              <TechIcon>🗄️</TechIcon>
              <TechTitle>Databases</TechTitle>
              <TechDescription>Secure, high-performance data management</TechDescription>
            </TechItem>
            <TechItem>
              <TechIcon>🌐</TechIcon>
              <TechTitle>Web Frameworks</TechTitle>
              <TechDescription>Flexible and modern development frameworks</TechDescription>
            </TechItem>
          </TechGrid>
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
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const TechIcon = styled.div`
  font-size: 48px;
  margin-bottom: 20px;
  display: block;
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
