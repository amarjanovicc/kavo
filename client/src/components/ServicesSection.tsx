'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const services = [
  { id: "001", title: "BRANDING", link: "/branding" },
  { id: "002", title: "GRAFIČKI DIZAJN", link: "/graficki-dizajn" },
  { id: "003", title: "WEB DIZAJN", link: "/web-dizajn" },
  { id: "004", title: "WEB DEVELOPMENT", link: "/web-development" },
];

const ServicesSection: React.FC = () => {
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const router = useRouter();

  const handleServiceClick = (link: string) => {
    router.push(link);
  };

  return (
    <section className="bg-[#080D10] text-[#EBECE7] py-20 px-4 sm:px-10 md:px-20 lg:px-32">
      {/* Added container div to ensure consistent width */}
      <div className="w-[80%] max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-[clamp(2.5rem,8vw,7rem)] font-extrabold text-[#FFBD00] text-center mb-6 sm:mb-8 tracking-tight w-full">
          ŠTO RADIMO
        </h2>
        <p className="text-center max-w-full text-[clamp(0.85rem,2vw,1rem)] uppercase tracking-widest mb-14 sm:mb-20 text-[#EBECE7]">
          Vjerujemo da poduzeća ne bi trebala samo postojati – već ostaviti dojam.
        </p>
      </div>

      <div className="flex flex-col max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`
              relative flex flex-row justify-between items-center 
              border-t border-[#EBECE7]/30 pt-6 sm:pt-8 pb-4 sm:pb-6 px-4 sm:px-10
              transition-all duration-500 ease-in-out cursor-pointer
              transform-gpu
              ${focusedId === service.id 
                ? 'bg-[#EBECE7] text-[#080D10] scale-105 shadow-2xl border-[#080D10]/50' 
                : 'hover:bg-[#EBECE7] hover:text-[#080D10] hover:scale-[1.02] hover:shadow-xl'
              }
              group
            `}
            onMouseEnter={() => setFocusedId(service.id)}
            onMouseLeave={() => setFocusedId(null)}
            onFocus={() => setFocusedId(service.id)}
            onBlur={() => setFocusedId(null)}
            onClick={() => handleServiceClick(service.link)}
            tabIndex={0}
            role="button"
            aria-label={`Otvori ${service.title} stranicu`}
          >
            {/* Overlay now changes to white instead of #EBECE7 */}
            <div 
              className={`
                absolute inset-0
                transition-all duration-500 ease-in-out
                ${focusedId === service.id 
                  ? 'bg-[#EBECE7]' 
                  : 'bg-transparent group-hover:bg-white'
                }
              `} 
            />

            <span 
              className={`
                relative z-10 text-xs sm:text-sm md:text-base flex-shrink-0
                transition-all duration-300
                ${focusedId === service.id 
                  ? 'opacity-100 text-[#080D10] font-semibold' 
                  : 'opacity-70 group-hover:opacity-100 group-hover:text-[#080D10]'
                }
              `}
            >
              ({service.id})
            </span>

            <h3
              className={`
                relative z-10 text-[clamp(1.2rem,4vw,2.5rem)] sm:text-[clamp(1.6rem,4vw,2.5rem)] font-bold flex-1 mx-4 sm:mx-8
                transition-all duration-500 ease-out
                text-center 
                ${index === 0 ? 'lg:text-left' : 
                  index === 1 ? 'lg:text-right' : 
                  index === 2 ? 'lg:text-center' : 
                  'lg:text-center'}
                ${focusedId === service.id 
                  ? 'transform translate-y-[-2px] text-[#080D10]' 
                  : 'group-hover:transform group-hover:translate-y-[-2px] group-hover:text-[#080D10]'
                }
              `}
            >
              {service.title}
            </h3>

            <span
              className={`
                relative z-10 text-xs sm:text-sm md:text-base uppercase tracking-wide flex-shrink-0
                transition-all duration-300 text-right
                ${focusedId === service.id 
                  ? 'text-[#080D10] font-bold transform scale-110' 
                  : 'group-hover:text-[#080D10] group-hover:font-semibold group-hover:scale-105'
                }
              `}
            >
              Istraži
            </span>

            <div 
              className={`
                absolute bottom-0 left-4 sm:left-10 right-4 sm:right-10 h-0.5
                transition-all duration-500 ease-in-out
                ${focusedId === service.id 
                  ? 'bg-[#080D10] scale-x-0' 
                  : 'bg-[#EBECE7]/30 scale-x-0 group-hover:bg-[#EBECE7]/30 group-hover:scale-x-100'
                }
              `} 
            />
          </div>
        ))}
      </div>

 
    </section>
  );
};

export default ServicesSection;
