import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function AnimatedSection({ children, delay = 0, direction = "up" }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <AnimatedWrapper
      ref={ref}
      isVisible={isVisible}
      direction={direction}
    >
      {children}
    </AnimatedWrapper>
  );
}

const AnimatedWrapper = styled.div`
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => {
    if (!props.isVisible) {
      switch (props.direction) {
        case "up":
          return "translateY(50px)";
        case "down":
          return "translateY(-50px)";
        case "left":
          return "translateX(50px)";
        case "right":
          return "translateX(-50px)";
        default:
          return "translateY(50px)";
      }
    }
    return "translateY(0) translateX(0)";
  }};
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
`;
