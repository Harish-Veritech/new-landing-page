import { Cloud, Database, Code2, Layers, Settings } from "lucide-react";
import AccessibilityAndCompliance from "../../assets/img/compliance/accessibility-and-compliance.png";
import PlatformCustomization from "../../assets/img/compliance/platform-customization.png";
import SecurityPrivacy from "../../assets/img/compliance/security-privacy.png";

export default function Compliance() {
  const techItems = [
    {
      image: AccessibilityAndCompliance,
      title: "Accessibility & Compliance",
      desc: "WCAG 2.2 AA, GDPR, FERMA",
    },
    {
      image: PlatformCustomization,
      title: "Platform Customization",
      desc: "Custom dashboards, advanced reporting, actionable insights",
    },
    {
      image: SecurityPrivacy,
      title: "Security & Privacy",
      desc: "End-to-end encryption, data residency in U.S.",
    },
  ];

  return (
    <section className='bg-white py-20 px-6'>
      <div className='max-w-7xl mx-auto px-6 text-center'>
        <p className='text-primary uppercase tracking-widest text-lg mb-4'>
          Built for Scale, Security & Accessibility
        </p>
        <h2 className='text-3xl md:text-4xl font-semibold text-dark mb-14'>
          Compliance, Security & Customization
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:max-w-3xl mx-auto place-content-center'>
          {techItems.map((item, index) => (
            <div key={index} className='flex flex-col gap-5'>
              <div className='image-container flex items-center justify-center'>
                <img
                  src={item.image}
                  alt={item.title}
                  className='w-60 rounded-lg'
                />
              </div>
              <div className='space-y-1'>
                <h4 className='font-semibold text-lg text-start'>
                  {item.title}
                </h4>
                <p className='text-dark text-start'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
