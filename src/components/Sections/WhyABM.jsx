import GridLayout from "../../assets/svg/photo-grid-layout.svg";
import GlobalReach from "../../assets/img/whyabm/global-reach.png";
import Security from "../../assets/img/whyabm/security.png";
import GoodRelation from "../../assets/img/whyabm/good-relation.png";
import RelationSecurityGlobalReach from "../../assets/img/whyabm/relation-security-global-reach.png";
import GlobalProject from "../../assets/svg/whyabm/global-project.svg";
import Scale from "../../assets/svg/whyabm/scale.svg";
import CustomIntegration from "../../assets/svg/whyabm/custom-integration.svg";
import IndustryLeader from "../../assets/svg/whyabm/industry-leader.svg";

const WhyABM = () => {
  const whyabmLists = [
    {
      icon: GlobalProject,
      title: "500+ Global Projects in Education, Finance, Healthcare, SaaS.",
    },
    {
      icon: Scale,
      title: "Proven Scalable, Secure Solutions.",
    },
    {
      icon: CustomIntegration,
      title: "Deep Expertise in Custom Integrations.",
    },
    {
      icon: IndustryLeader,
      title:
        "71% of Top 100 Universities Use Drupal – Industry’s Leading Open-Source Platform.",
    },
  ];

  return (
    <section className='relative bg-white py-20 px-6 lg:px-0' id='aboutus'>
      <div className='max-w-7xl mx-auto text-center'>
        <div className='grid lg:grid-cols-2 gap-18 mx-auto'>
          <div className='relative max-w-lg lg:max-w-2xl mx-auto'>
            <div className='hidden lg:flex'>
              <img
                src={GridLayout}
                alt='Photo Grid Layout'
                className='object-contain user-select-none'
              />

              <img
                src={GoodRelation}
                alt='Good Relation with customer'
                className='absolute top-2 left-6 animate-move-down-up user-select-none'
              />
              <img
                src={GlobalReach}
                alt='Global Reach for all variety of project/domains'
                className='absolute bottom-18 left-22 z-10 animate-move-right-left user-select-none'
              />
              <img
                src={Security}
                alt='Security'
                className='absolute bottom-2 left-56 z-5 animate-move-up-down user-select-none'
              />
            </div>
            <div className='flex lg:hidden'>
              <img
                src={RelationSecurityGlobalReach}
                alt='Good Relation with high security & Global Reach'
              />
            </div>
          </div>
          <div className='text-start max-w-2xl mx-auto'>
            <p className='text-primary uppercase tracking-widest text-lg mb-2'>
              Trusted By Global Institutions
            </p>
            <h2 className='text-3xl md:text-4xl font-semibold text-dark mb-4'>
              Why ABM?
            </h2>

            <div className='space-y-4'>
              {whyabmLists.map((listItem) => {
                return (
                  <div class='relative grid grid-cols-6 gap-4 items-center pb-4 group border-b border-grey/10'>
                    <div class='absolute bottom-0 left-0 h-[1px] w-full overflow-hidden'>
                      <div class='absolute inset-0 bg-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out'></div>
                    </div>
                    <span class='flex border-2 col-span-1 border-grey/10 p-1 md:p-2 rounded-full w-fit'>
                      <img src={listItem.icon} alt={listItem.title} />
                    </span>
                    <p class='text-start col-span-5 text-grey-800'>
                      {listItem.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyABM;
