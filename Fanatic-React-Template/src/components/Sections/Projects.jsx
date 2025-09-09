import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets (replace with your actual icon/image imports)
import { FaCloud, FaDatabase } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { SiGoogleclassroom, SiReact } from "react-icons/si";

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">
              Our Technology Stack Powers Your Success
            </h1>
            <p className="font13">
              Explore the key tech capabilities that drive our ABM solutions for
              universities.
            </p>
          </HeaderInfo>
          <TechGrid className="row textCenter">
            <TechItem className="col-xs-12 col-sm-4 col-md-2 col-lg-2">
              <IconWrapper>
                <FaCloud size={48} />
              </IconWrapper>
              <TechTitle>Cloud Infrastructure</TechTitle>
              <TechDesc>Scalable, reliable deployments</TechDesc>
            </TechItem>
            <TechItem className="col-xs-12 col-sm-4 col-md-2 col-lg-2">
              <IconWrapper>
                <MdCastForEducation size={48} />
              </IconWrapper>
              <TechTitle>Learning Management System</TechTitle>
              <TechDesc>Blackboard, Canvas, Moodle integrations</TechDesc>
            </TechItem>
            <TechItem className="col-xs-12 col-sm-4 col-md-2 col-lg-2">
              <IconWrapper>
                <SiGoogleclassroom size={48} />
              </IconWrapper>
              <TechTitle>Custom Tech Stack</TechTitle>
              <TechDesc>Tailored solutions built for your institution</TechDesc>
            </TechItem>
            <TechItem className="col-xs-12 col-sm-4 col-md-2 col-lg-2">
              <IconWrapper>
                <FaDatabase size={48} />
              </IconWrapper>
              <TechTitle>Databases</TechTitle>
              <TechDesc>Secure, high-performance data management</TechDesc>
            </TechItem>
            <TechItem className="col-xs-12 col-sm-4 col-md-2 col-lg-2">
              <IconWrapper>
                <SiReact size={48} />
              </IconWrapper>
              <TechTitle>Web Frameworks</TechTitle>
              <TechDesc>Flexible and modern development frameworks</TechDesc>
            </TechItem>
          </TechGrid>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Contact Us" action={() => alert("clicked")} />
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
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TechGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 40px 0;
`;
const TechItem = styled.div`
  flex: 1 1 200px;
  max-width: 220px;
  margin: 20px;
  text-align: center;
`;
const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto 15px auto;
  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const TechTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 8px;
`;
const TechDesc = styled.p`
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 0;
`;
