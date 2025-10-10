import Button from "../Buttons/Button";
import Ecosystems from "../../assets/svg/solutions/ecosystems.svg";
import Approach from "../../assets/svg/solutions/approach.svg";
import Workflows from "../../assets/svg/solutions/workflows.svg";
import Automation from "../../assets/svg/solutions/automation.svg";

export default function UniversitySolutions() {
  const solutions = [
    {
      icon: Ecosystems,
      title: "Custom, Connected Digital Ecosystems",
      description:
        "Integrated systems that connect your LMS, CRM, and campus operations into one smart digital twin.",
    },
    {
      icon: Approach,
      title: "Partnership Approach",
      description:
        "We work alongside your teams, tailoring technology solutions to match your institutional realities.",
    },
    {
      icon: Workflows,
      title: "Student–First Workflows",
      description:
        "Multilingual onboarding, AI-powered chat, and mobile-first experiences that delight modern students.",
    },
    {
      icon: Automation,
      title: "AI & Automation",
      description:
        "Intelligent chatbots, automated teaching assistants, and language companions to increase efficiency.",
    },
  ];

  return (
    <section className='relative bg-white py-20 px-6 lg:px-0'>
      <div className='max-w-7xl mx-auto text-center'>
        {/* Section Header */}
        <p className='text-primary uppercase tracking-widest text-lg mb-4'>
          What We Do – Solutions At A Glance
        </p>
        <h2 className='text-3xl md:text-4xl font-semibold text-dark mb-14'>
          Custom Solutions Built For Universities
        </h2>

        {/* Solutions Grid */}
        <div className='grid sm:grid-cols-2 gap-x-2 gap-y-3 md:gap-x-4 md:gap-y-5 mb-10 max-w-5xl mx-auto'>
          {solutions.map((solution, index) => (
            <div
              key={index}
              className='flex items-start gap-8 bg-blue-50/70 rounded-xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-left p-6'
            >
              <div className='flex-shrink-0 bg-gradient-to-b from-cyan-300 to-primary rounded-lg p-4'>
                <img src={solution.icon} alt={solution.title} />
              </div>
              <div>
                <h3 className='text-2xl text-dark mb-1'>{solution.title}</h3>
                <p className='text-dark/70 text-xl leading-relaxed'>
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          title='Explore Our Solutions'
          action={() => {}}
          trackingEvent='Explore Our Solutions'
          outline
        />
      </div>
    </section>
  );
}
