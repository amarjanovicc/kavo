'use client';

import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from 'framer-motion';
import { useRef, memo } from 'react';
import Image from 'next/image';

type Card = {
  title: string;
  description: string;
  image: string;
  rotate: string;
};

const cards: Card[] = [
  { title: 'Vidljivost koja se pamti', description: 'Istražujemo kako strategijski dizajn pomaže da se brend lako pronađe i zapamti.', image: '/cards/prodaja.png', rotate: '0' },
  { title: 'WEB od povjerenja', description: 'Svaka stranica koju napravimo uči nas kako graditi povjerenje kroz jasan i promišljen dizajn.', image: '/cards/web.png', rotate: '-4.35deg' },
  { title: 'Dizajn koji uvjerava', description: 'Eksperimentiramo s pametnim rješenjima i intuitivnim korisničkim iskustvom.', image: '/GrafickiDizajn/GrafickiDizajn2.png', rotate: '10.53deg' },
  { title: 'Iz ljubavi prema dizajnu', description: 'Kavo je osobni projekt – mjesto gdje učimo, istražujemo i dijelimo svoj rad.', image: '/cards/partneri.png', rotate: '3.98deg' },
];

// Memoizirana kartica za bolje performanse
const AnimatedCard = memo(({ card, yTransform, opacityTransform, prefersReducedMotion }: {
  card: Card;
  yTransform: MotionValue<string>;
  opacityTransform: MotionValue<number>;
  prefersReducedMotion: boolean;
}) => (
  <motion.div
    style={{ y: prefersReducedMotion ? 0 : yTransform, opacity: prefersReducedMotion ? 1 : opacityTransform }}
    className="sticky top-1/2 -translate-y-1/2 flex justify-center will-change-transform"
  >
    <div className="w-[85%] xs:w-[75%] sm:w-[60%] md:w-[45%] lg:w-[38%] xl:w-[32%] 2xl:w-[28%] aspect-square flex flex-col items-center justify-center">
      <div
        className="bg-[#EBECE7] rounded-[28px] xs:rounded-[32px] sm:rounded-[36px] md:rounded-[42px] lg:rounded-[48px] xl:rounded-[52px] flex flex-col items-center justify-between text-center p-3 xs:p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 h-full w-full shadow-2xl hover:shadow-3xl transition-all duration-300 ease-out transform-gpu border border-black/5"
        style={{ 
          transform: `rotate(${card.rotate})`,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)'
        }}
      >
        <div className="w-full h-[65%] xs:h-[68%] sm:h-[70%] relative mb-1 xs:mb-2 sm:mb-3">
          <Image
            src={card.image}
            alt={card.title}
            fill
            sizes="(max-width: 480px) 85vw, (max-width: 640px) 75vw, (max-width: 768px) 60vw, (max-width: 1024px) 45vw, (max-width: 1280px) 38vw, 32vw"
            className="object-contain"
            priority
            loading="eager"
          />
        </div>
        {/* Add bottom margin to the text container */}
        <div className="flex flex-col items-center justify-center h-[35%] xs:h-[32%] sm:h-[30%] mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8">
          <h3 className="font-bold text-[#080D10] text-[clamp(1.1rem,4vw,1.6rem)] xs:text-[clamp(1.2rem,3.5vw,1.8rem)] sm:text-[clamp(1.4rem,3vw,2rem)] md:text-[clamp(1.6rem,2.8vw,2.2rem)] lg:text-[clamp(1.8rem,2.5vw,2.4rem)] xl:text-[clamp(2rem,2.2vw,2.6rem)] leading-tight mb-1 xs:mb-2">{card.title}</h3>
          <p className="text-[#080D10] text-[clamp(0.7rem,2.5vw,0.9rem)] xs:text-[clamp(0.8rem,2.2vw,1rem)] sm:text-[clamp(0.9rem,2vw,1.1rem)] md:text-[clamp(1rem,1.8vw,1.2rem)] lg:text-[clamp(1.1rem,1.6vw,1.3rem)] xl:text-[clamp(1.2rem,1.4vw,1.4rem)] max-w-[95%] leading-relaxed">{card.description}</p>
        </div>
      </div>
    </div>
  </motion.div>
));

AnimatedCard.displayName = 'AnimatedCard';

const ScrollCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });

  const cardCount = cards.length;

  // Y transformacije
  const yTransform0 = useTransform(scrollYProgress, [0 / cardCount, 1 / cardCount], ['100%', '0%']);
  const yTransform1 = useTransform(scrollYProgress, [1 / cardCount, 2 / cardCount], ['100%', '0%']);
  const yTransform2 = useTransform(scrollYProgress, [2 / cardCount, 3 / cardCount], ['100%', '0%']);
  const yTransform3 = useTransform(scrollYProgress, [3 / cardCount, 4 / cardCount], ['100%', '0%']);

  // Opacity transformacije
  const opacityTransform0 = useTransform(scrollYProgress, [0 / cardCount, 1 / cardCount], [0, 1]);
  const opacityTransform1 = useTransform(scrollYProgress, [1 / cardCount, 2 / cardCount], [0, 1]);
  const opacityTransform2 = useTransform(scrollYProgress, [2 / cardCount, 3 / cardCount], [0, 1]);
  const opacityTransform3 = useTransform(scrollYProgress, [3 / cardCount, 4 / cardCount], [0, 1]);

  const yTransforms = [yTransform0, yTransform1, yTransform2, yTransform3];
  const opacityTransforms = [opacityTransform0, opacityTransform1, opacityTransform2, opacityTransform3];

  return (
    <section ref={containerRef} className="relative w-full bg-[#FFBD00] text-[#080D10] py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 flex flex-col items-center">
      {/* Naslov sa animacijama */}
      <div className="relative text-center mb-12 xs:mb-14 sm:mb-16 px-3 xs:px-4 sm:px-6 max-w-6xl">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="font-extrabold leading-tight break-words text-[clamp(2rem,8vw,4rem)] xs:text-[clamp(2.2rem,7.5vw,4.5rem)] sm:text-[clamp(2.5rem,7vw,5rem)] md:text-[clamp(3rem,6vw,6rem)] lg:text-[clamp(3.5rem,5.5vw,7rem)] xl:text-[clamp(4rem,5vw,8rem)] 2xl:text-[clamp(4.5rem,4.5vw,9rem)]"
        >
          {/* U ČEMU SMO - animacija odozdo */}
          <motion.span 
            variants={{
              hidden: { 
                opacity: 0, 
                y: 100, 
                rotateX: -45,
                scale: 0.8
              },
              visible: { 
                opacity: 1, 
                y: 0,
                rotateX: 0,
                scale: 1
              }
            }}
            transition={{ 
              duration: 0.8, 
              delay: 0.1, 
              ease: [0.25, 0.4, 0.25, 1],
              type: "spring",
              stiffness: 100
            }}
            style={{ transformOrigin: '50% 100%' }}
            className="inline-block"
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            U ČEMU SMO
          </motion.span>{' '}

          {/* STVARNO sa podvlačenjem */}
          <span className="relative inline-block">
            {/* Animirana podvlaka sa naprednim efektima - moved BEFORE text to be behind it */}
            <motion.div 
              variants={{
                hidden: { 
                  scaleX: 0, 
                  opacity: 0,
                  rotateZ: -10,
                  y: 20
                },
                visible: { 
                  scaleX: 1, 
                  opacity: 1,
                  rotateZ: 0,
                  y: 0
                }
              }}
              transition={{ 
                duration: 1.5, 
                delay: 1, 
                ease: [0.25, 0.46, 0.45, 0.94]
              }} 
              className="absolute left-0 bottom-0 w-full h-auto origin-left z-0"
              whileHover={{ 
                scaleY: 1.2,
                scaleX: 1.05,
                y: -3,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Glavna slika podvlake */}
              <motion.div
                animate={{
                  y: [0, -3, 0],
                  rotateZ: [0, 1, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Image 
                  src="/underline/cards.png" 
                  alt="Underline decoration" 
                  width={800} 
                  height={100} 
                  priority 
                  sizes="(max-width: 768px) 100vw, 800px" 
                  className="w-full h-auto object-contain pointer-events-none select-none" 
                />
              </motion.div>
              
              {/* Dodatni glow efekat */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.3, 0],
                  scale: [0.8, 1.1, 0.8]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 1.5,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-[#080D10]/10 rounded-full blur-sm"
              />
            </motion.div>
            
            {/* Text now comes AFTER the underline so it appears on top */}
            <motion.span 
              variants={{
                hidden: { 
                  opacity: 0, 
                  scale: 0.5, 
                  rotateY: -90,
                  z: -100
                },
                visible: { 
                  opacity: 1, 
                  scale: 1,
                  rotateY: 0,
                  z: 0
                }
              }}
              transition={{ 
                duration: 1, 
                delay: 0.4, 
                ease: [0.175, 0.885, 0.32, 1.275],
                type: "spring",
                stiffness: 80
              }} 
              style={{ transformOrigin: '50% 50%' }} 
              className="inline-block relative z-10"
              whileHover={{ 
                scale: 1.1, 
                rotateY: 10,
                z: 50,
                transition: { duration: 0.3 }
              }}
            >
              STVARNO
            </motion.span>
          </span>{' '}

          {/* DOBRI - animacija odozgo */}
          <motion.span 
            variants={{
              hidden: { 
                opacity: 0, 
                y: -100, 
                rotateX: 45,
                scale: 0.8
              },
              visible: { 
                opacity: 1, 
                y: 0,
                rotateX: 0,
                scale: 1
              }
            }}
            transition={{ 
              duration: 0.8, 
              delay: 0.7, 
              ease: [0.25, 0.4, 0.25, 1],
              type: "spring",
              stiffness: 100
            }}
            style={{ transformOrigin: '50% 0%' }}
            className="inline-block"
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            DOBRI
          </motion.span>
        </motion.h2>
      </div>

      {/* Kartice */}
      <div className="relative w-full" style={{ height: `${cardCount * 100}vh` }}>
        {cards.map((card, i) => (
          <AnimatedCard key={`card-${i}`} card={card} yTransform={yTransforms[i]} opacityTransform={opacityTransforms[i]} prefersReducedMotion={prefersReducedMotion || false} />
        ))}
      </div>
    </section>
  );
};

export default ScrollCards;
