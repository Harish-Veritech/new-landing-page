import { Calendar, Phone } from "lucide-react";

export default function Button({
  title,
  href,
  action,
  outline,
  trackingEvent,
  icon,
  classname,
}) {
  const handleClick = () => {
    if (trackingEvent && typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click", {
        event_category: "Button",
        event_label: trackingEvent,
        value: 1,
      });
    }

    if (action) action();
  };

  const baseClasses =
    "inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-base rounded-lg transition-colors duration-300 cursor-pointer";

  const solidClasses = "bg-[#0045FF] text-white hover:bg-[#0036CC]";

  const outlinedClasses =
    "border border-[#0045FF] text-[#0045FF] hover:bg-dark/5";

  const IconComponent =
    icon === "calendar" ? Calendar : icon === "phone" ? Phone : null;

  const ButtonContent = (
    <>
      {IconComponent && <IconComponent className='w-5 h-5' />}
      <span>{title}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        onClick={handleClick}
        className={`${baseClasses} ${
          outline ? outlinedClasses : solidClasses
        } ${classname}`}
      >
        {ButtonContent}
      </a>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${
        outline ? outlinedClasses : solidClasses
      } ${classname}`}
    >
      {ButtonContent}
    </button>
  );
}
