import {
  SiWordpress,
  SiDrupal,
  SiDjango,
  SiNodedotjs,
  SiReact,
  SiAngular,
  SiKotlin,
  SiSwift,
} from "react-icons/si";

const techs = [
  {
    name: "WordPress",
    icon: <SiWordpress className='text-blue-500 text-5xl' />,
  },
  { name: "Drupal", icon: <SiDrupal className='text-blue-700 text-5xl' /> },
  { name: "Django", icon: <SiDjango className='text-green-700 text-5xl' /> },
  {
    name: "Node.js",
    icon: <SiNodedotjs className='text-green-500 text-5xl' />,
  },
  { name: "React", icon: <SiReact className='text-sky-500 text-5xl' /> },
  { name: "Angular", icon: <SiAngular className='text-red-600 text-5xl' /> },
  { name: "Kotlin", icon: <SiKotlin className='text-purple-500 text-5xl' /> },
  { name: "Swift", icon: <SiSwift className='text-orange-500 text-5xl' /> },
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
            {/* First set of icons */}
            {techs.map((tech, index) => (
              <div
                key={`first-${tech.name}-${index}`}
                className='flex flex-col items-center text-center group transition-transform duration-300 flex-shrink-0'
              >
                <div className='mb-2'>{tech.icon}</div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {techs.map((tech, index) => (
              <div
                key={`second-${tech.name}-${index}`}
                className='flex flex-col items-center text-center group transition-transform duration-300 flex-shrink-0'
              >
                <div className='mb-2'>{tech.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
