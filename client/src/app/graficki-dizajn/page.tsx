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
    <main className="bg-[#FFBD00] text-[#080D10] min-h-screen pt-28 md:pt-36 flex flex-col items-center px-4 md:px-8 lg:px-16">
      {/* Naslov */}
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
        className="text-[clamp(2.5rem,6vw,6rem)] font-extrabold mb-6 tracking-tight text-center"
      >
        GRAFIČKI DIZAJN
      </motion.h1>

      {/* Podnaslov */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
        className="text-base md:text-lg font-semibold mb-6 max-w-2xl text-center px-4 leading-relaxed"
      >
        Grafički dizajn pretvara ideje u vizualnu priču. On daje oblik vašem brendu kroz letke, bannere, kataloge, digitalne i print materijale. Dobar dizajn ne samo da izgleda lijepo, već jasno prenosi poruku i ističe vas pred konkurencijom.
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
        {/* 1. Sekcija - text on the left side */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            className="flex-1"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4 text-[#080D10] text-left">
                Vizualna privlačnost
              </h2>
              <p className="text-[clamp(1rem,1.8vw,1.25rem)] leading-relaxed text-[#080D10] text-left">
                Dobar dizajn odmah privlači pogled i ostavlja dojam. Pazimo da svaka vaša grafika bude moderna, čista i prilagođena vašoj ciljanoj publici. To znači više klikova, veću pažnju i bolju komunikaciju.
              </p>
            </div>
          </motion.div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/GrafickiDizajn/GrafickiDizajn1.png"
              alt="Grafički dizajn ilustracija"
              width={500}
              height={500}
              className="w-full max-w-lg h-auto"
            />
          </div>
        </section>

        {/* 2. Sekcija - text on the right side */}
        <section className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            className="flex-1"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4 text-[#080D10] text-right">
                Fleksibilnost i kreativnost
              </h2>
              <p className="text-[clamp(1rem,1.8vw,1.25rem)] leading-relaxed text-[#080D10] text-right">
                Svaki projekt je drugačiji. Zato nudimo dizajn rješenja za letke, kataloge, bannere, društvene mreže, majice, pakiranja i još puno više. Možemo napraviti jednostavnija i brza rješenja ili potpuno unikatne dizajne od nule – sve ovisi o vašim ciljevima i potrebama.
              </p>
            </div>
          </motion.div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/GrafickiDizajn/GrafickiDizajn2.png"
              alt="Kreativni dizajn ilustracija"
              width={500}
              height={500}
              className="w-full max-w-lg h-auto"
            />
          </div>
        </section>

        {/* 3. Sekcija - text on the left side */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            className="flex-1"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4 text-[#080D10] text-left">
                Što nam je potrebno od vas
              </h2>
              <p className="text-[clamp(1rem,1.8vw,1.25rem)] leading-relaxed text-[#080D10] text-left">
                Da bi dizajn bio što učinkovitiji, trebamo znati: <br />
                - Što vaš postojeći vizualni identitet trenutno komunicira <br />
                - Želite li da dizajn naglašava brend, proizvod ili neku treću vrijednost <br />
                - Gdje će se dizajni koristiti (digital, print, ili oboje) <br />
                Što jasnije znamo kontekst, to bolje možemo pogoditi dizajn koji komunicira pravu poruku.
              </p>
            </div>
          </motion.div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/GrafickiDizajn/GrafickiDizajn3.png"
              alt="Brendiranje ilustracija"
              width={500}
              height={500}
              className="w-full max-w-lg h-auto"
            />
          </div>
        </section>

        {/* 4. Sekcija - text on the right side */}
        <section className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12 lg:gap-16 mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            className="flex-1"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4 text-[#080D10] text-right">
                Isporuka
              </h2>
              <p className="text-[clamp(1rem,1.8vw,1.25rem)] leading-relaxed text-[#080D10] text-right">
                Gotove dizajne predajemo u svim formatima koji su vam potrebni, od digitalnih do printa. Time ste odmah spremni koristiti materijale na svim kanalima bez dodatnih prilagodbi.
              </p>
            </div>
          </motion.div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/GrafickiDizajn/GrafickiDizajn4.png"
              alt="Isporuka ilustracija"
              width={500}
              height={500}
              className="w-full max-w-lg h-auto"
            />
          </div>
        </section>
      </div>

      <ContactSection />
    </main>
  );
};

export default GrafickiDizajnPage;