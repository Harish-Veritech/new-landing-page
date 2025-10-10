import { useState } from "react";
import { Menu, X } from "lucide-react";
import LogoIcon from "../../assets/svg/Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navlinks = [
    { label: "Services", link: "#services" },
    { label: "About Us", link: "#aboutus" },
    { label: "Engagement Model", link: "#" },
    { label: "Blog", link: "#" },
    { label: "Career", link: "#" },
    {
      label: "Let’s Talk →",
      link: "https://calendly.com/meet-abmtechnologies/30min",
    },
  ];

  return (
    <nav
      className={`absolute lg:fixed top-0 left-0 w-full bg-transparent backdrop-blur-md lg:bg-white z-50 transition-all duration-300 h-20 lg:shadow-lg`}
    >
      <div className='max-w-7xl mx-auto flex justify-between items-center h-full px-6 lg:px-8'>
        {/* Logo */}
        <a
          href='https://abmtechnologies.us/'
          className='flex items-center gap-2 justify-center mx-auto lg:mx-0'
        >
          <LogoIcon width={120} />
        </a>
        <div className='lg:hidden'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='text-primary focus:outline-none'
            aria-label='Toggle menu'
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className='hidden lg:flex items-center gap-8 list-none m-0 p-0'>
          {navlinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.link}
                className='text-primary font-semibold text-base hover:text-accent transition-colors'
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className='lg:hidden bg-white border-t border-dark/10 shadow-md h-screen'>
          <ul className='flex flex-col items-center'>
            {navlinks.map((link) => (
              <li
                key={link.label}
                className='w-full border-b border-dark/10 px-5 py-4'
              >
                <a
                  href={link.link}
                  className='text-dark font-medium text-lg hover:text-primary transition-colors'
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
