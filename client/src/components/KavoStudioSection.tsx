'use client';

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Script from "next/script";

const Typewriter: React.FC<{ text: string; delay?: number; speed?: number }> = ({ 
  text, 
  delay = 0, 
  speed = 100 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed, started]);

  return <span>{displayText}</span>;
};

const KavoStudioSection: React.FC = () => {
  const kavoRef = useRef<HTMLSpanElement>(null);
  
  // Pre-render the complete text for search engines
  const agencyDescription = "Agencija koju vode troje mladih kreativaca, vizionara i radoholičara. Pomažemo poduzećima i startupovima da budu vidljivi online. Ne radimo samo web stranice – mi ih dizajniramo, razvijamo, održavamo i oglašavamo, tako da se vi možete fokusirati na svoje klijente.";
  const missionText = "Naša misija je biti pouzdan partner koji poduzećima i startupovima omogućuje da se istaknu na tržištu i povećaju promet publikom.";
  const approachText = "Usuđujemo se biti drugačiji. Dok svijet često slijedi gotove obrasce, mi tražimo ono što vaš brend čini posebnim i pretvaramo to u digitalno iskustvo koje ljudi pamte.";
  
  return (
    <>
      {/* Add Schema.org structured data */}
      <Script
        id="kavo-studio-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            'name': 'Kavo Studio',
            'description': 'Kreativna agencija specijalizirana za grafički dizajn, branding, web razvoj i digitalni marketing.',
            'image': 'https://kavo.studio/logo.png',
            'url': 'https://kavo.studio',
            'sameAs': [
              'https://www.instagram.com/kavostudioo/'
              // Add other social profiles
            ],
            'member': [
              {
                '@type': 'Person',
                'name': 'Adam',
                'jobTitle': 'Web Developer',
                'image': 'https://kavo.studio/avatars/Adam.png'
              },
              {
                '@type': 'Person',
                'name': 'Nina',
                'jobTitle': 'Designer',
                'image': 'https://kavo.studio/avatars/Nina.png'
              },
              {
                '@type': 'Person',
                'name': 'Nino',
                'jobTitle': 'Marketing Specialist',
                'image': 'https://kavo.studio/avatars/Nino.png'
              }
            ]
          })
        }}
      />

      <section 
        id="about-us" 
        className="bg-[#EBECE7] text-[#080D10] py-16 px-6 md:px-12 lg:px-16 relative overflow-hidden"
        aria-label="O nama - Kavo Studio"
      >
        {/* Hidden SEO text for crawlers that's visually hidden but available to screen readers */}
        <div className="sr-only">
          <h2>O Kavo Studiju - Kreativna agencija iz Varaždina</h2>
          <p><strong>Tko smo:</strong> {agencyDescription}</p>
          <p><strong>Naša misija:</strong> {missionText}</p>
          <p><strong>Naš pristup:</strong> {approachText}</p>
          <dl>
            <dt>Lokacija</dt>
            <dd>Varaždin, Hrvatska</dd>
            <dt>Usluge</dt>
            <dd>Grafički dizajn, Branding, Web razvoj, Digitalni marketing</dd>
            <dt>Osnovan</dt>
            <dd>2023</dd>
          </dl>
        </div>
        
        {/* Glavni naslov */}
        <div className="text-center mb-20 lg:mb-28 relative">
          <motion.h2 
            className="font-extrabold text-[clamp(4rem,12vw,10rem)] lg:text-[clamp(8rem,10vw,12rem)] leading-none relative z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span ref={kavoRef} className="relative inline-block">
              KAVO
              {/* Image underline positioned horizontally in the middle of "KAVO" */}
              <motion.div 
                className="absolute left-0 top-1/2 w-full z-[-1]"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                style={{ transformOrigin: "left center", height: "8px" }}
              >
                <Image
                  src="/underline/KavoStudio.png"
                  alt=""
                  width={200}
                  height={8}
                  className="w-full h-full object-cover"
                  aria-hidden="true"
                />
              </motion.div>
            </span>
            {" STUDIO"}
          </motion.h2>
        </div>

        {/* Glavni sadržaj - tri reda */}
        <div className="max-w-7xl mx-auto space-y-32 lg:space-y-40">
          
          {/* Prvi red - lijevi tekst s borderom, desna slika */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="order-2 lg:order-1">
              <motion.div 
                className="text-base md:text-lg lg:text-xl leading-relaxed pl-6 max-w-lg border-l border-[#080D10]"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-sm font-semibold text-[#FFBD00] uppercase tracking-wider mb-4">O nama</h3>
                <Typewriter 
                  text={agencyDescription}
                  delay={1000}
                  speed={25}
                />
              </motion.div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <motion.div 
                className="relative w-full h-80 md:h-96 lg:h-[500px] xl:h-[600px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: 1,
                  y: [0, -12, 0]
                }}
                transition={{ 
                  opacity: { duration: 0.8, delay: 0.6 },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }
                }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/avatars/Adam.png"
                  alt="Web developer radi na laptopu - član Kavo tima"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Drugi red - lijeva slika, desni tekst s borderom */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative">
              <motion.div 
                className="relative w-full h-80 md:h-96 lg:h-[500px] xl:h-[600px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: 1, 
                  y: [0, -10, 0]
                }}
                transition={{ 
                  opacity: { duration: 0.8, delay: 0.9 },
                  y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.3 }
                }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/avatars/Nina.png"
                  alt="Grafička dizajnerica s olovkom - članica Kavo tima"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>
            <div className="lg:text-right lg:flex lg:justify-end">
              <motion.div 
                className="text-base md:text-lg lg:text-xl leading-relaxed pr-6 max-w-lg border-r border-[#080D10]"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <h3 className="text-sm font-semibold text-[#FFBD00] uppercase tracking-wider mb-4">Naša misija</h3>
                <Typewriter 
                  text={missionText}
                  delay={4000}
                  speed={30}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Treći red - lijevi tekst s borderom, desna slika */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="order-2 lg:order-1">
              <motion.div 
                className="text-base md:text-lg lg:text-xl leading-relaxed pl-6 max-w-lg border-l border-[#080D10]"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <h3 className="text-sm font-semibold text-[#FFBD00] uppercase tracking-wider mb-4">Naš pristup</h3>
                <Typewriter 
                  text={approachText}
                  delay={7000}
                  speed={35}
                />
              </motion.div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <motion.div 
                className="relative w-full h-80 md:h-96 lg:h-[500px] xl:h-[600px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -8, 0]
                }}
                transition={{ 
                  opacity: { duration: 0.8, delay: 1.2 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.6 }
                }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/avatars/Nino.png"
                  alt="Marketinški stručnjak - član Kavo tima"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default KavoStudioSection;