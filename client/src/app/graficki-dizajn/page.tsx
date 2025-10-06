"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactSection from '@/components/ContactSection';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const GrafickiDizajnPage: React.FC = () => {
  return (
    <main className="bg-[#FFBD00] text-[#080D10] min-h-screen pt-20 md:pt-32 flex flex-col items-center px-4 md:px-8 lg:px-16">
      {/* Naslov */}
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
        className="text-[clamp(3rem,8vw,8rem)] font-extrabold mb-6 tracking-tight text-center"
      >
        GRAFIČKI DIZAJN
      </motion.h1>

      

      <div className="w-full max-w-7xl space-y-16 md:space-y-20">
        {/* 1. Istraživanje - Tekst lijevo, slika desno */}
        <section className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          <div className="flex-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg"
            >
              <h3 className="text-[clamp(1rem,2vw,1.5rem)] font-bold uppercase mb-3 text-[#080D10]">
                STALNA PODRŠKA
              </h3>
              <p className="text-[clamp(0.875rem,1.5vw,1.125rem)] leading-relaxed text-[#080D10] font-medium">
                Redovito pratimo performanse, ažuriramo sustave i pazimo na sigurnost podataka. To znači da ne morate razmišljati o tehničkim detaljima – mi smo tu da rješavamo probleme prije nego što ih vi ili vaši klijenti uopće primijetite.
              </p>
            </motion.div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <Image
              src="/odrzavanje/Odrzavanje1.png"
              alt="Grafički dizajn ilustracija"
              width={400}
              height={400}
              className="w-full max-w-sm lg:max-w-md h-auto"
            />
          </div>
        </section>

        {/* 2. Idealni klijenti - Slika lijevo, tekst desno */}
        <section className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 lg:gap-16">
          <div className="flex-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg"
            >
              <h3 className="text-[clamp(1rem,2vw,1.5rem)] font-bold uppercase mb-3 text-[#080D10]">
                SVJEŽ SADRŽAJ
              </h3>
              <p className="text-[clamp(0.875rem,1.5vw,1.125rem)] leading-relaxed text-[#080D10] font-medium">
                Web stranica živi samo ako se redovito obnavlja. Po potrebi unosimo nove sadržaje, fotografije i vijesti, kako bi vaši posjetitelji uvijek pronašli nešto aktualno i vrijedno pažnje.
              </p>
            </motion.div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-start">
            <Image
              src="/odrzavanje/Odrzavanje2.png"
              alt="Kreativni dizajn ilustracija"
              width={400}
              height={400}
              className="w-full max-w-sm lg:max-w-md h-auto"
            />
          </div>
        </section>

        {/* 3. Konkurencija - Tekst lijevo, slika desno */}
        <section className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          <div className="flex-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg"
            >
              <h3 className="text-[clamp(1rem,2vw,1.5rem)] font-bold uppercase mb-3 text-[#080D10]">
                DIGITALNI RAST
              </h3>
              <p className="text-[clamp(0.875rem,1.5vw,1.125rem)] leading-relaxed text-[#080D10] font-medium">
                Održavanje ne staje na webu – pomažemo vam i u širem digitalnom nastupu. Nudimo vođenje društvenih mreža, kreiranje i upravljanje kampanjama, email marketing i druge usluge koje zajedno s vašom web stranicom čine snažan online nastup.
              </p>
            </motion.div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <Image
              src="/odrzavanje/Odrzavanje3.png"
              alt="Brendiranje ilustracija"
              width={400}
              height={400}
              className="w-full max-w-sm lg:max-w-md h-auto"
            />
          </div>
        </section>

        {/* 4. Samo slika */}
        <section className="w-full flex justify-center items-center my-20">
          <div className="w-full max-w-3xl aspect-[589/623] relative">
            <Image
              src="/odrzavanje/Odrzavanje4.png"
              alt="Finalni dizajn ilustracija"
              fill
              className="object-contain"
            />
          </div>
        </section>
      </div>

      {/* Zasebni tekst u sredini */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
        className="max-w-4xl mx-auto text-center px-4 mb-16 mt-8"
      >
        <p className="text-[clamp(1rem,2vw,1.25rem)] leading-relaxed text-[#080D10] font-medium">
          Naša misija nije samo izrada web stranice, nego i dugoročna suradnja. Uz nas imate partnera koji će pratiti vaš digitalni razvoj i pomagati vam da uvijek budete korak ispred konkurencije.
        </p>
      </motion.section>
            <ContactSection></ContactSection>
      
    </main>
  );
};

export default GrafickiDizajnPage;
 