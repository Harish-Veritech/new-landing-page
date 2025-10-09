import { MapPin, Mail, Phone, Linkedin } from "lucide-react";
import LogoIcon from "../../assets/svg/Logo";

export default function Footer() {
  const abmLinks = [
    { label: "About Us", link: "#" },
    { label: "Let's Talk", link: "#" },
    { label: "Blog", link: "#" },
    { label: "Engagement Model", link: "#" },
    { label: "Policy Privacy", link: "#" },
    { label: "Terms of Use", link: "#" },
  ];

  const services = [
    { label: "Consulting", link: "#" },
    { label: "Managed Services", link: "#" },
    { label: "AI Solutions", link: "#" },
  ];

  return (
    <footer className='bg-primary text-light'>
      <div className='max-w-7xl mx-auto px-6 sm:px-10 py-14'>
        {/* Main grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14'>
          {/* Logo */}
          <div className='flex justify-start bg-white p-2 rounded-lg place-self-center md:justify-center lg:justify-start'>
            <LogoIcon />
          </div>

          {/* ABM Technologies Links */}
          <div>
            <h3 className='font-semibold text-light mb-4'>ABM Technologies</h3>
            <ul className='space-y-2'>
              {abmLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    className='text-light/80 hover:text-light transition'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className='font-semibold text-light mb-4'>Services</h3>
            <ul className='space-y-2'>
              {services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    className='text-light/80 hover:text-light transition'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className='font-semibold text-light mb-4'>Get In Touch</h3>
            <ul className='space-y-3'>
              <li className='flex items-start gap-3'>
                <MapPin className='w-5 h-5 mt-1 text-light/80 flex-shrink-0' />
                <span className='text-light/80'>
                  3524 Siverside Rd Suite 35B,
                  <br />
                  Wilmington, DE 19810–4929,
                  <br />
                  New Castle, Delaware
                </span>
              </li>
              <li className='flex items-center gap-3'>
                <Mail className='w-5 h-5 text-light/80 flex-shrink-0' />
                <a
                  href='mailto:connect@abmtechnologies.us'
                  className='text-light/80 hover:text-light transition'
                >
                  connect@abmtechnologies.us
                </a>
              </li>
              <li className='flex items-center gap-3'>
                <Phone className='w-5 h-5 text-light/80 flex-shrink-0' />
                <a
                  href='tel:+13477671521'
                  className='text-light/80 hover:text-light transition'
                >
                  +1 347-767-1521
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-white/30 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-200 text-center gap-3'>
          <p>© 2025 ABM Technologies & Consultancy Inc</p>
          <div className='flex items-center gap-2'>
            <span>Connect with us on:</span>
            <a
              href='#'
              className='text-light/80 rounded-sm hover:bg-light hover:text-primary transition p-1'
              aria-label='LinkedIn'
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
