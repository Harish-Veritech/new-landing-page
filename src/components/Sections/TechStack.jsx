import { Cloud, Database, Code2, Layers, Settings } from "lucide-react";

export default function TechStackSection() {
  const techItems = [
    {
      icon: <Cloud className='w-8 h-8 text-primary' />,
      title: "Cloud Infrastructure",
      desc: "Scalable, reliable deployments",
    },
    {
      icon: <Layers className='w-8 h-8 text-primary' />,
      title: "Custom Tech Stack",
      desc: "Tailored solutions built for your institution",
    },
    {
      icon: <Database className='w-8 h-8 text-primary' />,
      title: "Databases",
      desc: "Secure, high-performance data management",
    },
    {
      icon: <Code2 className='w-8 h-8 text-primary' />,
      title: "Learning Management System",
      desc: "Blackboard, Canvas, Moodle integrations",
    },
    {
      icon: <Settings className='w-8 h-8 text-primary' />,
      title: "Web Frameworks",
      desc: "Flexible and modern development frameworks",
    },
  ];

  return (
    <section className='bg-primary/5 py-20'>
      <div className='max-w-7xl mx-auto text-center'>
        <p className='text-primary uppercase tracking-widest text-lg mb-4'>
          Key Tech Capabilities
        </p>
        <h2 className='text-3xl md:text-4xl font-semibold text-dark mb-14'>
          Our Technology Stack Powers Your Success
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 md:grid-rows-6 gap-3 text-left md:max-w-3xl lg:max-w-5xl mx-auto'>
          {techItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 bg-primary/5 rounded-xl p-6 hover:shadow-md transition-shadow ${
                [1, 3].includes(index) ? "row-span-3" : "row-span-2"
              } ${index === 2 ? "row-start-3" : ""} ${
                index === 3 ? "col-start-2 row-start-4" : ""
              } ${index === 4 ? "row-start-5" : ""}`}
            >
              <div className='flex-shrink-0'>{item.icon}</div>
              <div>
                <h3 className='text-2xl font-semibold text-dark mb-1'>
                  {item.title}
                </h3>
                <p className='text-dark/70 text-lg leading-relaxed'>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
