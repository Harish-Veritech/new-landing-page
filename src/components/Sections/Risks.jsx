import { Group } from "lucide-react";
import Graduates from "../../assets/img/graduates.jpg";
import Button from "../Buttons/Button";

export default function Risks() {
  const risksItems = [
    {
      icon: <Group className='w-8 h-8 text-white' />,
      desc: "Lose prospective international students to tech-savvy competitors",
    },
    {
      icon: <Group className='w-8 h-8 text-white' />,
      desc: "Higher administrative costs from manual, inefficient processes",
    },
    {
      icon: <Group className='w-8 h-8 text-white' />,
      desc: "Declining student satisfaction as expectations for digital interaction rise",
    },
  ];

  return (
    <section className='bg-primary/5 py-20 px-6'>
      <div className='max-w-7xl mx-auto px-6 text-center'>
        <p className='text-primary uppercase tracking-widest text-lg mb-4'>
          The Cost of Inaction
        </p>
        <h2 className='text-3xl md:text-4xl font-semibold text-dark mb-14'>
          Why Wait? The Risks of Fragmented Systems
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:max-w-4xl mx-auto place-content-center mb-14'>
          {risksItems.map((item, index) => (
            <div
              key={index}
              className='flex flex-col justify-center items-start gap-4 bg-white p-4 rounded-lg'
            >
              <div className='flex-shrink-0 bg-gradient-to-b from-primary/50 to-primary rounded-lg p-3'>
                {item.icon}
              </div>
              <p className='text-dark text-start'>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Card */}
        <div class='relative flex flex-col items-center justify-center rounded-2xl overflow-hidden bg-primary text-center text-white p-8 md:p-10 max-w-4xl mx-auto'>
          <div class='absolute inset-0'>
            <img
              src={Graduates}
              alt='Graduates'
              class='w-full h-full object-cover opacity-40'
            />
            <div class='absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/70'></div>
          </div>

          <div class='relative z-10 max-w-3xl flex flex-col items-center'>
            <h2 class='text-6xl font-semibold text-orange-400 pt-2 mb-2'>
              71%
            </h2>
            <p class='text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-6 px-6'>
              of the top 100 universities use{" "}
              <span class='font-semibold'>Drupal</span> - future-proof your
              institution with
              <span class='text-cyan-300 font-semibold'>
                {" "}
                scalable, reliable tech.
              </span>
            </p>
            <Button
              title='Talk to an Expert'
              action={() => {}}
              outline
              classname='border-light text-light backdrop-blur-xs'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
