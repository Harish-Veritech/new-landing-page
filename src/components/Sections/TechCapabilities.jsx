import Aws from "../../assets/img/TechCapabilities/aws.svg";
import Azure from "../../assets/img/TechCapabilities/azure.svg";
import GoogleCloud from "../../assets/img/TechCapabilities/google-cloud.svg";
import Wordpress from "../../assets/img/TechCapabilities/wordpress.svg";
import Drupal from "../../assets/img/TechCapabilities/drupal.svg";
import Django from "../../assets/img/TechCapabilities/django.svg";
import Nodejs from "../../assets/img/TechCapabilities/nodejs.svg";
import ReactNative from "../../assets/img/TechCapabilities/react-native.svg";
import OpenEdx from "../../assets/img/TechCapabilities/openedx.svg";
import Canvas from "../../assets/img/TechCapabilities/canvas.svg";
import Postgresql from "../../assets/img/TechCapabilities/postgresql.svg";
import MongoDb from "../../assets/img/TechCapabilities/mongodb.svg";
import MySql from "../../assets/img/TechCapabilities/mysql.svg";

const techs = [
  { name: "AWS", image: Aws },
  { name: "Microsoft Azure", image: Azure },
  { name: "Google Cloud", image: GoogleCloud },
  { name: "Wordpress", image: Wordpress },
  { name: "Drupal", image: Drupal },
  { name: "Django", image: Django },
  { name: "Node js", image: Nodejs },
  { name: "React Native", image: ReactNative },
  { name: "Open Edx", image: OpenEdx },
  { name: "Canvas", image: Canvas },
  { name: "Postgre SQL", image: Postgresql },
  { name: "MongoDB", image: MongoDb },
  { name: "My SQL", image: MySql },
];

export default function TechCapabilities() {
  return (
    <section className='bg-primary/5 py-16'>
      <div className='px-4 text-center max-w-7xl mx-auto'>
        <p className='text-primary uppercase tracking-widest text-lg mb-3'>
          Innovation You Can Trust
        </p>
        <h2 className='text-3xl md:text-4xl font-semibold text-dark mb-14'>
          Our Tech Capabilities
        </h2>

        {/* Infinite scrolling container */}
        <div className='relative overflow-hidden'>
          <div className='flex animate-scroll gap-10 md:gap-16 items-center'>
            {techs.map((tech, index) => (
              <div
                key={`second-${tech.name}-${index}`}
                className='flex flex-col items-center text-center group transition-transform duration-300 flex-shrink-0'
              >
                <img
                  src={tech.image}
                  alt={tech.name}
                  className='user-select-none'
                />
              </div>
            ))}
            {techs.slice(0, 6).map((tech, index) => (
              <div
                key={`second-${tech.name}-${index}`}
                className='flex flex-col items-center text-center group transition-transform duration-300 flex-shrink-0'
              >
                <img
                  src={tech.image}
                  alt={tech.name}
                  className='user-select-none'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
