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
    <main className="bg-[#FFBD00] text-[#080D10] min-h-screen pt-32 md:pt-40 flex flex-col items-center  overflow-x: hidden; ">
      {/* Naslov */}
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
        className="text-[clamp(2.5rem,6vw,6rem)] font-extrabold mb-6 tracking-tight text-center px-4"
      >
        WEB DEVELOPMENT
      </motion.h1>

      {/* Podnaslov */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
        className="uppercase text-sm md:text-base font-semibold mb-4 w-full text-center px-4 md:px-8 leading-[127.3%] tracking-[0.5px]"
      >
Nakon što završimo s dizajnom, prelazimo na kodiranje. Pretvaramo vizual u stranicu koja savršeno radi na svim uređajima i preglednicima.      </motion.p>

      {/* Border */}
      <div className="w-4/5 h-[1px] bg-[#080D10] mx-auto mb-8 mt-8"></div>

      {/* 1. Slika → Tekst */}
      <section className="flex flex-col md:flex-row items-center mb-6 w-screen md:w-full overflow-hidden min-h-[500px]">
        {/* Slika */}
        <div className="flex-1 flex justify-center mb-6 md:mb-0">
          <Image
            src="/development/development1.png"
            alt="Ideja ilustracija"
            width={500}
            height={530}
            className="w-full max-w-lg h-auto"
          />
        </div>

        {/* Tekst s pozadinskom slikom */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
          className="relative flex-1 max-w-xl mx-auto md:ml-16 z-10"
        >
          <div className="bg-white rounded-xl shadow-lg p-10 text-[#080D10]">
            <h2 className="text-[clamp(1.5rem,4vw,3rem)] font-bold uppercase mb-4">
              BRZINA I SIGURNOST
            </h2>
            <p className="text-[clamp(1rem,2.2vw,1.5rem)] leading-[127.3%] tracking-[0.5px]">
Brza stranica znači zadovoljan posjetitelj, a sigurna stranica znači miran vlasnik. Zato pazimo da se vaša stranica učitava u sekundi i da je zaštićena najboljim praksama. To znači manje čekanja za korisnike i više povjerenja u vaš brend.            </p>
          </div>
        </motion.div>
      </section>

      {/* 2. Tekst → Slika */}
      <section className="flex flex-col md:flex-row items-center justify-between mb-6 gap-8 w-full overflow-hidden min-h-[500px]">
        {/* Tekst */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
          className="relative flex-1 w-full z-10"
        >
          <div className="bg-white rounded-xl shadow-lg p-10 text-[#080D10]">
            <h2 className="text-[clamp(1.5rem,4vw,3rem)] font-bold uppercase mb-4">
              FLEKSIBILNOST
            </h2>
            <p className="text-[clamp(1rem,2.2vw,1.5rem)] leading-[127.3%] tracking-[0.5px]">
Svaka tvrtka ima različite ciljeve, zato nudimo opcije razvoja koje odgovaraju vašem budžetu i vremenskom okviru. Ako trebate gotovu stranicu brzo i povoljno, koristimo provjerene predloške. Ako želite jedinstveno rješenje i potpunu kontrolu – razvijamo stranicu potpuno od nule, prilagođenu baš vama. U oba slučaja dobit ćete funkcionalnu i modernu web stranicu spremnu za rast.            </p>
          </div>
        </motion.div>

        {/* Slika */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/development/development2.png"
            alt="Fleksibilnost ilustracija"
            width={500}
            height={530}
            className="w-full max-w-lg h-auto"
          />
        </div>
      </section>





      {/* 3. Slika → Tekst */}
      <section className="flex flex-col md:flex-row items-center justify-between mb-6 gap-8 w-full overflow-hidden min-h-[500px]">
        {/* Slika */}
        <div className="flex-1 flex justify-center mb-6 md:mb-0">
          <Image
            src="/development/development3.png"
            alt="Testiranje ilustracija"
            width={500}
            height={530}
            className="w-full max-w-lg h-auto"
          />
        </div>

        {/* Tekst */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
          className="relative flex-1 z-10"
        >
          <div className="bg-white rounded-xl shadow-lg p-10 text-[#080D10]">
            <h2 className="text-[clamp(1.5rem,4vw,3rem)] font-bold uppercase mb-4">
              TESTIRANJE
            </h2>
            <p className="text-[clamp(1rem,2.2vw,1.5rem)] leading-[127.3%] tracking-[0.5px]">
Nakon programiranja provodimo detaljno testiranje kako bismo provjerili radi li sve ispravno na različitim uređajima i preglednicima. Posebnu pažnju posvećujemo brzini učitavanja i SEO optimizaciji, jer želimo da vaša stranica bude što bolje rangirana na Googleu.            </p>
          </div>
        </motion.div>
      </section>

      {/* 4. Tekst → Slika */}
      <section className="flex flex-col md:flex-row items-center justify-between mb-6 gap-8 w-full overflow-hidden min-h-[500px]">
        {/* Tekst */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
          className="relative flex-1 w-full z-10"
        >
          <div className="bg-white rounded-xl shadow-lg p-10 text-[#080D10]">
            <h2 className="text-[clamp(1.5rem,4vw,3rem)] font-bold uppercase mb-4">
              POKRETANJE I PODRŠKA
            </h2>
            <p className="text-[clamp(1rem,2.2vw,1.5rem)] leading-[127.3%] tracking-[0.5px]">
Kada je stranica spremna, pomažemo vam oko postavljanja na hosting i povezivanja s domenom, a po potrebi radimo i obuku kako biste samostalno mogli upravljati sadržajem.            </p>
          </div>
        </motion.div>

        {/* Slika */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/development/development4.png"
            alt="Pokretanje ilustracija"
            width={500}
            height={530}
            className="w-full max-w-lg h-auto"
          />
        </div>
      </section>

          <ContactSection></ContactSection>
    
      {/* Dodatna slika na dno - 80% širine iz dna stranice */}
      <div className="w-4/5 mx-auto relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <Image
          src="/development/development5.png"
          alt="Finalna ilustracija"
          fill
          className="object-contain object-bottom"
        />
      </div>
    </main>
  );
};

export default DevelopmentPage;
