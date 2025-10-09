import LogoIcon from "../../assets/svg/Logo";

export default function TopNavbar() {
  const navlinks = [
    { label: "Services", link: "#" },
    { label: "About Us", link: "#" },
    { label: "Engagement Model", link: "#" },
    { label: "Blog", link: "#" },
    { label: "Career", link: "#" },
    { label: "Let’s Talk →", link: "#" },
  ];
  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white z-50 transition-all duration-300 h-20 shadow-lg`}
    >
      <div className='max-w-7xl mx-auto flex justify-between items-center h-full'>
        <a
          href='https://abmtechnologies.us/'
          className='flex items-center gap-2'
        >
          <LogoIcon />
        </a>

        {/* Right Side: Menu */}
        <ul className='flex items-center gap-8 list-none m-0 p-0'>
          {navlinks.map((link) => (
            <li>
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
    </nav>
  );
}
