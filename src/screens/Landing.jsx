import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import WhyABM from "../components/Sections/WhyABM";
import TechCapabilities from "../components/Sections/TechCapabilities";
import UniversitySolutions from "../components/Sections/UniversitySolutions";
import Compliance from "../components/Sections/Compliance";
import Risks from "../components/Sections/Risks";
import CTA from "../components/Sections/CTA";
import Footer from "../components/Sections/Footer";
import TechStackSection from "../components/Sections/TechStack";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <WhyABM />
      <TechCapabilities />
      <UniversitySolutions />
      <TechStackSection />
      <Compliance />
      <Risks />
      <CTA />
      <Footer />
    </>
  );
}
