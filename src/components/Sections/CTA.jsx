import Button from "../Buttons/Button";

const CTA = () => {
  return (
    <section class='relative overflow-hidden bg-gradient-to-t from-[#0B1437] to-[#0E1B50] py-24 flex justify-center my-32'>
      <Circle classname='w-48 h-48 absolute -bottom-5 -left-10 animate-move-up-down ' />
      <Circle classname='w-44 h-44 absolute -bottom-18 left-24 animate-move-right-left ' />
      <Circle classname='w-44 h-44 absolute -top-14 right-0 animate-move-up-down' />
      <Circle classname='w-56 h-56 absolute top-12 right-8 animate-move-down-up' />

      <div class='relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 bg-white/5 backdrop-blur-md border border-white/50 rounded-xl px-8 py-10 md:px-10 md:py-12 shadow-2xl max-w-5xl mx-auto w-full'>
        <h2 class='text-2xl md:text-3xl font-semibold text-white text-center md:text-left leading-snug'>
          Let’s Build The Future Of
          <br class='hidden md:block' />
          Higher Education Together
        </h2>

        <div class='flex flex-wrap justify-center md:justify-end gap-4'>
          <Button action={() => {}} icon='calendar' title='Schedule a Demo' />
          <Button
            action={() => {}}
            icon='phone'
            title='Contact Us'
            classname='text-light border-light'
            outline
          />
        </div>
      </div>
    </section>
  );
};

const Circle = ({ classname }) => {
  const directions = [
    "bg-gradient-to-t",
    "bg-gradient-to-b",
    "bg-gradient-to-l",
    "bg-gradient-to-r",
    "bg-gradient-to-tr",
    "bg-gradient-to-br",
    "bg-gradient-to-tl",
    "bg-gradient-to-bl",
  ];

  const direction = directions[Math.floor(Math.random() * directions.length)];

  return (
    <div
      class={`${direction} rounded-full from-primary to-primary/5 ${classname}`}
    ></div>
  );
};

export default CTA;
