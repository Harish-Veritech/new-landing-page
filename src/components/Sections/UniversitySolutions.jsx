import React from "react";
import { Network, Users, Workflow, Bot } from "lucide-react";
import Button from "../Buttons/Button";

export default function UniversitySolutions() {
  const solutions = [
    {
      icon: <Network className='w-10 h-10 text-white' />,
      title: "Custom, Connected Digital Ecosystems",
      description:
        "Integrated systems that connect your LMS, CRM, and campus operations into one smart digital twin.",
    },
    {
      icon: <Users className='w-10 h-10 text-white' />,
      title: "Partnership Approach",
      description:
        "We work alongside your teams, tailoring technology solutions to match your institutional realities.",
    },
    {
      icon: <Workflow className='w-10 h-10 text-white' />,
      title: "Student–First Workflows",
      description:
        "Multilingual onboarding, AI-powered chat, and mobile-first experiences that delight modern students.",
    },
    {
      icon: <Bot className='w-10 h-10 text-white' />,
      title: "AI & Automation",
      description:
        "Intelligent chatbots, automated teaching assistants, and language companions to increase efficiency.",
    },
  ];

  return (
    <section className='relative bg-white py-20'>
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
              className='flex items-start gap-4 bg-blue-50/70 rounded-xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-left p-6'
            >
              <div className='flex-shrink-0 bg-gradient-to-b from-primary/50 to-primary rounded-lg p-4'>
                {solution.icon}
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-dark mb-1'>
                  {solution.title}
                </h3>
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
