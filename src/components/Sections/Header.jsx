import Button from "../Buttons/Button";
import HeaderImage from "../../assets/img/hero-image.png";
import Arrow from "../../assets/img/arrow.png";
import Books from "../../assets/img/hero-books.png";

export default function Header() {
  return (
    <section
      id='home'
      className="relative w-full bg-[url('/assets/img/hero-bg.png')] bg-cover bg-center bg-no-repeat"
    >
      <div className='relative flex flex-wrap items-center justify-between pt-32 md:pt-36 z-10 px-8 max-w-5xl lg:max-w-7xl mx-auto'>
        {/* Left side */}
        <div className='w-1/2 flex justify-center md:justify-start mb-10 md:mb-0 flex-2'>
          <div>
            <h1 className='text-2xl md:text-5xl lg:text-6xl font-semibold leading-tight'>
              <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent select-none'>
                Empowering Universities
              </span>
              <br />
              with Future-Ready <br />
              <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent select-none'>
                Digital Solutions
              </span>
            </h1>

            <p className='max-w-3xs md:max-w-2xl mt-4 md:mt-6 mb-6 md:mb-12 text-xl md:text-2xl font-light leading-7 text-dark'>
              Transform your university into a connected, scalable, and
              high-performing digital ecosystem.
            </p>

            <div className='flex flex-wrap gap-4 max-w-[400px] transition-all duration-300'>
              <Button
                title='Schedule a Demo'
                href='https://calendly.com/meet-abmtechnologies/30min'
                trackingEvent='Schedule Demo - Header'
                icon='calendar'
              />
              <Button title='Contact Us' outline icon='phone' />
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className='w-1/2 flex justify-center md:justify-end relative z-10 flex-1 transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-2'>
          <img
            src={HeaderImage}
            alt='office'
            className='w-[250px] lg:w-[480px] max-w-[600px] md:max-w-[1200px] object-contain'
          />
          <img
            src={Arrow}
            alt='arrow to books'
            className='absolute -z-10 top-0 left-8 object-contain'
          />
          <img
            src={Books}
            alt='Books'
            className='absolute -z-5 -bottom-2 left-16 w-24 md:w-36 object-contain'
          />
        </div>
      </div>
    </section>
  );
}
