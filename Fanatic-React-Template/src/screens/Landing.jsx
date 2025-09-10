import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import WhyABM from "../components/Sections/WhyABM";
import Services from "../components/Sections/Services";
import TechStack from "../components/Sections/TechStack";
import Compliance from "../components/Sections/Compliance";
import Risks from "../components/Sections/Risks";
import FinalCTA from "../components/Sections/FinalCTA";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <WhyABM />
      <Services />
      <TechStack />
      <Compliance />
      <Risks />
      <FinalCTA />
      <Contact />
      <Footer />
    </>
  );
}


