import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LogoIcon from "../../assets/svg/Logo";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper style={{ height: "80px" }}>
      <NavInner>
        {/* Left Side: Logo */}
        <a
          href='https://abmtechnologies.us/'
          className='flex items-center gap-2'
        >
          <LogoIcon />
        </a>

        {/* Right Side: Menu */}
        <NavMenu>
          <li>
            <a href='#services'>Services</a>
          </li>
          <li>
            <a href='#about'>About Us</a>
          </li>
          <li>
            <a href='#engagement'>Engagement Model</a>
          </li>
          <li>
            <a href='#blog'>Blog</a>
          </li>
          <li>
            <a href='#career'>Career</a>
          </li>
          <li className='highlight'>
            <a href='#contact'>Let’s Talk →</a>
          </li>
        </NavMenu>
      </NavInner>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: height 0.3s ease, box-shadow 0.3s ease;
`;

const NavInner = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BrandName = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: #00288f;
  letter-spacing: 0.5px;
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;

  li a {
    font-size: 15px;
    font-weight: 600;
    color: #0029ab;
    text-decoration: none;
    transition: color 0.3s;
  }

  li a:hover {
    color: #580cd2;
  }

  .highlight a {
    color: #0029ab;
    font-weight: 700;
    padding-left: 10px;
  }

  .highlight a:hover {
    color: #580cd2;
    font-weight: 700;
    padding-left: 10px;
  }
`;
