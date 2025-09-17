import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className='flexCenter animate whiteBg'
        style={y > 100 ? { height: "60px" } : { height: "80px" }}
      >
        <NavInner className='container flexSpaceCenter'>
          <a
            className='pointer flexNullCenter'
            href='https://abmtechnologies.us/'
          >
            <LogoIcon />
          </a>
          <BurderWrapper
            className='pointer'
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className='flexNullCenter'>
            <li className='semiBold font15 pointer'>
              <Link
                activeClass='active'
                style={{ padding: "10px 15px" }}
                to='home'
                spy={true}
                smooth={true}
                offset={-80}
              >
                Home
              </Link>
            </li>
            <li className='semiBold font15 pointer'>
              <Link
                activeClass='active'
                style={{ padding: "10px 15px" }}
                to='why-abm'
                spy={true}
                smooth={true}
                offset={-80}
              >
                Why ABM
              </Link>
            </li>
            <li className='semiBold font15 pointer'>
              <Link
                activeClass='active'
                style={{ padding: "10px 15px" }}
                to='services'
                spy={true}
                smooth={true}
                offset={-80}
              >
                Solutions
              </Link>
            </li>
            <li className='semiBold font15 pointer'>
              <Link
                activeClass='active'
                style={{ padding: "10px 15px" }}
                to='tech-stack'
                spy={true}
                smooth={true}
                offset={-80}
              >
                Technology
              </Link>
            </li>
            <li className='semiBold font15 pointer'>
              <Link
                activeClass='active'
                style={{ padding: "10px 15px" }}
                to='compliance'
                spy={true}
                smooth={true}
                offset={-80}
              >
                Compliance
              </Link>
            </li>
            <li className='semiBold font15 pointer'>
              <Link
                activeClass='active'
                style={{ padding: "10px 15px" }}
                to='contact'
                spy={true}
                smooth={true}
                offset={-80}
              >
                Contact
              </Link>
            </li>
          </UlWrapper>
          <UlWrapperRight className='flexNullCenter'>
            <li className='semiBold font15 pointer'>
              <a
                href='mailto:hello@abmtechnologies.com'
                style={{ padding: "10px 30px 10px 0" }}
              >
                Contact Us
              </a>
            </li>
            <li className='semiBold font15 pointer flexCenter'>
              <a
                href='https://calendly.com/meet-abmtechnologies/30min'
                className='radius8 lightBg'
                style={{ padding: "10px 15px" }}
                target='_blank'
                rel='noopener noreferrer'
                onClick={() => {
                  if (typeof window !== "undefined" && window.gtag) {
                    window.gtag("event", "click", {
                      event_category: "Button",
                      event_label: "Schedule Demo - Navbar",
                      value: 1,
                    });
                  }
                }}
              >
                Schedule Demo
              </a>
            </li>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 1060px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 1060px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 1060px) {
    display: none;
  }
`;
