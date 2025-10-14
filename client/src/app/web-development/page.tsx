"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactSection from '@/components/ContactSection';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const DevelopmentPage: React.FC = () => {
  return (
    <main className="bg-[#FFBD00] text-[#080D10] min-h-screen pt-28 md:pt-36 flex flex-col items-center px-4 md:px-8 lg:px-16">
      {/* Naslov */}
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
        className="text-[clamp(2.5rem,6vw,6rem)] font-extrabold mb-6 tracking-tight text-center"
      >
        WEB DEVELOPMENT
      </motion.h1>

      {/* Podnaslov */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
        className="text-base md:text-lg font-semibold mb-6 max-w-2xl text-center px-4 leading-relaxed"
      >
        Nakon što završimo s dizajnom, prelazimo na kodiranje. Pretvaramo vizual u stranicu koja savršeno radi na svim uređajima i preglednicima.
      </motion.p>

      {/* Horizontalna linija */}
      <motion.hr
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
        className="w-full max-w-5xl border-[#080D10] border-opacity-50 mb-16"
      />

      <div className="w-full max-w-7xl space-y-16 md:space-y-24">
        {/* 1. Sekcija */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
          <div className="flex-1 flex justify-center order-2 md:order-1">
            <Image
              src="/development/development1.png"
              alt="Ideja ilustracija"
              width={500}
              height={500}
              className="w-full max-w-lg h-auto"
            />
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            className="flex-1 order-1 md:order-2"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4 text-[#080D10]">
                Brzina i sigurnost
              </h2>
              <p className="text-[clamp(1rem,1.8vw,1.25rem)] leading-relaxed text-[#080D10]">
                Brza stranica znači zadovoljan posjetitelj, a sigurna stranica znači miran vlasnik. Zato pazimo da se vaša stranica učitava u sekundi i da je zaštićena najboljim praksama. To znači manje čekanja za korisnike i više povjerenja u vaš brend.
              </p>
            </div>
          </motion.div>
        </section>

        {/* 2. Sekcija */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            className="flex-1"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4 text-[#080D10]">
                Fleksibilnost
              </h2>
              <p className="text-[clamp(1rem,1.8vw,1.25rem)] leading-relaxed text-[#080D10]">
                Svaka tvrtka ima različite ciljeve, zato nudimo opcije razvoja koje odgovaraju vašem budžetu i vremenskom okviru. Ako trebate gotovu stranicu brzo i povoljno, koristimo provjerene predloške. Ako želite jedinstveno rješenje i potpunu kontrolu – razvijamo stranicu potpuno od nule, prilagođenu baš vama.
              </p>
            </div>
          </motion.div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/development/development2.png"
              alt="Fleksibilnost ilustracija"
              width={500}
              height={500}
              className="w-full max-w-lg h-auto"
            />
          </div>
        </section>

        {/* 3. Sekcija */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
          <div className="flex-1 flex justify-center order-2 md:order-1">
            <Image
              src="/development/development3.png"
              alt="Testiranje ilustracija"
              width={500}
              height={500}
              className="w-full max-w-lg h-auto"
            />
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            className="flex-1 order-1 md:order-2"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4 text-[#080D10]">
                Testiranje
              </h2>
              <p className="text-[clamp(1rem,1.8vw,1.25rem)] leading-relaxed text-[#080D10]">
                Nakon programiranja provodimo detaljno testiranje kako bismo provjerili radi li sve ispravno na različitim uređajima i preglednicima. Posebnu pažnju posvećujemo brzini učitavanja i SEO optimizaciji, jer želimo da vaša stranica bude što bolje rangirana na Googleu.
              </p>
            </div>
          </motion.div>
        </section>

        {/* 4. Sekcija */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16 mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            className="flex-1"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4 text-[#080D10]">
                Pokretanje i podrška
              </h2>
              <p className="text-[clamp(1rem,1.8vw,1.25rem)] leading-relaxed text-[#080D10]">
                Kada je stranica spremna, pomažemo vam oko postavljanja na hosting i povezivanja s domenom, a po potrebi radimo i obuku kako biste samostalno mogli upravljati sadržajem.
              </p>
            </div>
          </motion.div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/development/development4.png"
              alt="Pokretanje ilustracija"
              width={500}
              height={500}
              className="w-full max-w-lg h-auto"
            />
          </div>
        </section>
      </div>

      <ContactSection />
    
      {/* Dodatna slika na dno */}
     
    </main>
  );
};

export default DevelopmentPage;
