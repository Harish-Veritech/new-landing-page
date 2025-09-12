import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border, href, trackingEvent }) {
  const handleClick = () => {
    // Track Google Analytics event if trackingEvent is provided
    if (trackingEvent && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Button',
        event_label: trackingEvent,
        value: 1
      });
    }
    
    // Execute custom action if provided
    if (action) {
      action();
    }
  };

  // If href is provided, render as anchor tag
  if (href) {
    return (
      <AnchorWrapper
        href={href}
        className="animate pointer radius8"
        onClick={handleClick}
        border={border}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </AnchorWrapper>
    );
  }

  // Otherwise render as button
  return (
    <Wrapper
      className="animate pointer radius8"
      onClick={handleClick}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "rgba(112, 112, 112, 0.3)" : "rgba(118, 32, 255, 0.3)")};
  background: ${(props) => (props.border ? 
    "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 249, 250, 0.8) 100%)" : 
    "linear-gradient(135deg, #7620ff 0%, #580cd2 100%)"
  )};
  backdrop-filter: blur(10px);
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#707070" : "#fff")};
  font-weight: 600;
  font-size: 16px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
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
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    background: ${(props) => (props.border ? 
      "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.9) 100%)" : 
      "linear-gradient(135deg, #580cd2 0%, #4a0bb8 100%)"
    )};
    border: 1px solid ${(props) => (props.border ? "#7620ff" : "rgba(118, 32, 255, 0.5)")};
    color: ${(props) => (props.border ? "#7620ff" : "#fff")};
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 12px 30px rgba(118, 32, 255, 0.3);
  }
  
  &:hover::after {
    left: 100%;
  }
  
  &:active {
    transform: translateY(0) scale(0.98);
    box-shadow: 0 6px 20px rgba(118, 32, 255, 0.2);
  }
  
  &:focus {
    outline: 2px solid rgba(118, 32, 255, 0.3);
    outline-offset: 2px;
  }
`;

const AnchorWrapper = styled.a`
  border: 1px solid ${(props) => (props.border ? "rgba(112, 112, 112, 0.3)" : "rgba(118, 32, 255, 0.3)")};
  background: ${(props) => (props.border ? 
    "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 249, 250, 0.8) 100%)" : 
    "linear-gradient(135deg, #7620ff 0%, #580cd2 100%)"
  )};
  backdrop-filter: blur(10px);
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#707070" : "#fff")};
  font-weight: 600;
  font-size: 16px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  display: inline-block;
  text-align: center;
  
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
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    background: ${(props) => (props.border ? 
      "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.9) 100%)" : 
      "linear-gradient(135deg, #580cd2 0%, #4a0bb8 100%)"
    )};
    border: 1px solid ${(props) => (props.border ? "#7620ff" : "rgba(118, 32, 255, 0.5)")};
    color: ${(props) => (props.border ? "#7620ff" : "#fff")};
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 12px 30px rgba(118, 32, 255, 0.3);
    text-decoration: none;
  }
  
  &:hover::after {
    left: 100%;
  }
  
  &:active {
    transform: translateY(0) scale(0.98);
    box-shadow: 0 6px 20px rgba(118, 32, 255, 0.2);
  }
  
  &:focus {
    outline: 2px solid rgba(118, 32, 255, 0.3);
    outline-offset: 2px;
  }
`;

