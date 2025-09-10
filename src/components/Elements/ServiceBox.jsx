import React from "react";
import styled from "styled-components";
// Assets - Solution Images
import Solution1 from "../../assets/img/solutions/solution-1.webp";
import Solution2 from "../../assets/img/solutions/solution-2.webp";
import Solution3 from "../../assets/img/solutions/solution-3.webp";
import Solution4 from "../../assets/img/solutions/solution-4.webp";

export default function ServiceBox({icon, title, subtitle}) {
  let getIcon;

  switch (icon) {
    case "roller":
      getIcon = <img src={Solution3} alt="Partnership Approach" />;
      break;
    case "monitor":
      getIcon = <img src={Solution2} alt="Student-First Workflows" />;
      break;
    case "browser":
      getIcon = <img src={Solution1} alt="Custom, Connected Digital Ecosystems" />;
      break;
    case "printer":
      getIcon = <img src={Solution4} alt="AI & Automation" />;
      break;
    default:
      getIcon = <img src={Solution1} alt="Custom Solution" />;
      break;
  }


  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 30px 20px;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 249, 250, 0.8) 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
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
  
  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.9) 100%);
  }
  
  &:active {
    transform: translateY(-5px) scale(1.01);
  }
`;
const IconStyle = styled.div`
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  margin-bottom: 20px;
  
  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    transition: all 0.3s ease;
    /* Remove white background and blend with card */
    background: transparent;
    mix-blend-mode: multiply;
    filter: contrast(1.2) brightness(1.1);
  }
  
  ${Wrapper}:hover & {
    transform: scale(1.1);
    
    img {
      transform: scale(1.2) rotate(5deg);
      filter: contrast(1.3) brightness(1.2);
      mix-blend-mode: multiply;
    }
  }
  
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 10px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;