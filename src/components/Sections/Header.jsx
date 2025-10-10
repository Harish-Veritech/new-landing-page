import Button from "../Buttons/Button";
import HeaderImage from "../../assets/img/hero-image.png";
import Arrow from "../../assets/img/arrow.png";
import Books from "../../assets/img/hero-books.png";
import HeroImage from "../../assets/img/abm-hero-image.png";

export default function Header() {
  return (
    <section
      id='home'
      className="relative w-full bg-[url('/assets/img/hero-bg.png')] bg-cover bg-center bg-no-repeat"
    >
      <div className='relative grid grid-cols-1 md:grid-cols-2 pt-32 md:pt-36 z-10 px-6 md:px-8 md:pb-8 lg:pb-0 max-w-5xl lg:max-w-7xl mx-auto md:max-h-650px lg:max-h-[750px]'>
        {/* Left side */}
        <div className='w-full flex justify-start md:justify-center mb-10 md:mb-0 flex-2'>
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

            <div className='flex flex-col md:flex-row overflow-visible gap-4 max-w-[400px] transition-all duration-300'>
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
        <div className='hidden lg:flex relative w-full justify-center md:justify-end -z-10 flex-1 transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-2'>
          <img
            src={HeaderImage}
            alt='office'
            className='w-[250px] lg:w-[480px] object-contain'
          />
          <img
            src={Arrow}
            alt='arrow to books'
            className='absolute -z-10 top-0 left-8 lg:left-[10%] xl:left-[18%] object-contain'
          />
          <img
            src={Books}
            alt='Books'
            className='absolute -z-5 -bottom-2 left-16 lg:left-[20%] xl:left-[30%] w-24 md:w-36 object-contain'
          />

          {/* <img
            src={HeaderImage}
            alt='office'
            className='max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:w-[480px] lg:max-w-[600px] object-contain'
          />
          <img
            src={Arrow}
            alt='arrow to books'
            className='absolute w-[300px] sm:w-[350px] md:w-[400px] lg:w-[480px] left-[5%] sm:left-[25%] md:left-20 lg:left-36 -top-8 md:top-0 object-contain -z-10'
          />
          <img
            src={Books}
            alt='Books'
            className='absolute w-24 md:w-28 lg:w-36 left-[15%] sm:left-[30%] md:left-24 lg:left-38 -z-5 -bottom-[2%] md:bottom-0 object-contain'
          /> */}
        </div>
        <div className='flex lg:hidden relative -z-10'>
          <img
            src={HeroImage}
            alt='A Girl with laptop in her hand'
            // className='absolute -top-[313px] md:top-30 lg:top-0 -right-12 w-[250px] md:w-[350px] lg:w-[450px]'
            className='absolute -top-[19.5rem] md:top-30 lg:top-0 -right-12 w-[250px] md:w-[350px] lg:w-[450px]'
          />
        </div>
      </div>
    </section>
  );
}
