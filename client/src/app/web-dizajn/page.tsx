'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactSection from '@/components/ContactSection';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const WebDizajnPage: React.FC = () => {
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
        WEB DIZAJN
      </motion.h1>

      {/* Podnaslov */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
        className="text-base md:text-lg font-semibold mb-6 max-w-2xl text-center px-4 leading-relaxed"
      >
        Web dizajn nije samo lijep izgled – to je način da ispričate priču o svom brendu i ostavite dobar prvi dojam kod posjetitelja.
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
        {/* 1. Sekcija - text on the right side */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
          <div className="flex-1 flex justify-center order-2 md:order-1">
            <Image
              src="/WebDizajn/WebDizajn1.png"
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
              <p className="text-[clamp(1rem,1.8vw,1.25rem)] leading-relaxed text-[#080D10] text-right">
                Naš cilj je da vaša stranica bude jednostavna za korištenje i ugodna za pregledavanje. Biramo boje, tipografiju i vizualne elemente koji najbolje predstavljaju vas, ali uvijek razmišljamo i o tome kako će se posjetitelji kretati kroz stranicu. Želimo da im sve bude jasno, logično i lako dostupno.
              </p>
            </div>
          </motion.div>
        </section>

        {/* 2. Sekcija - text on the left side */}
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
                Responsivnost
              </h2>
              <p className="text-[clamp(1rem,1.8vw,1.25rem)] leading-relaxed text-[#080D10] text-left">
                Većina ljudi danas pretražuje internet putem mobitela, pa je važno da stranica izgleda odlično na svakom ekranu. Zato radimo responsivan dizajn – onaj koji se automatski prilagođava mobitelu, tabletu ili računalu. Tako vaši klijenti uvijek dobivaju najbolje iskustvo, bez obzira odakle dolaze.
              </p>
            </div>
          </motion.div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/WebDizajn/WebDizajn2.png"
              alt="Klijent ilustracija"
              width={500}
              height={500}
              className="w-full max-w-lg h-auto"
            />
          </div>
        </section>

        {/* 3. Sekcija - text on the right side */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
          <div className="flex-1 flex justify-center order-2 md:order-1">
            <Image
              src="/WebDizajn/WebDizajn3.png"
              alt="Konkurencija ilustracija"
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
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4 text-[#080D10] text-right">
                Za ljude i tražilice
              </h2>
              <p className="text-[clamp(1rem,1.8vw,1.25rem)] leading-relaxed text-[#080D10] text-right">
                Dobar dizajn nije samo za ljude – voli ga i Google. Kada je stranica pregledna, brza i jednostavna za korištenje, to pomaže i boljem rangiranju na tražilicama. Zato pazimo da vaša stranica bude i lijepa i funkcionalna, ali i optimizirana tako da vas potencijalni klijenti lakše pronađu.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Zaključak */}
        <motion.footer
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          viewport={{ once: false }}
          className="w-full max-w-4xl mx-auto mb-16 mt-12"
        >
          <div className="relative p-8 md:p-10 text-[#080D10] bg-white rounded-xl shadow-lg">
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold mb-6 text-center">
              Dizajn koji donosi rezultate
            </h2>
            <p className="text-[clamp(1rem,1.8vw,1.25rem)] leading-relaxed text-center">
              Na kraju, web dizajn za nas nije samo stvar vizualnog dojma. On ima zadatak pomoći vam da ostvarite svoje ciljeve – bilo da želite privući nove klijente, prodati proizvod ili jednostavno predstaviti svoj brend na najbolji način. Naš zadatak je stvoriti dizajn koji će raditi za vas, a ne samo lijepo izgledati.
            </p>
          </div>
        </motion.footer>
      </div>

      <ContactSection />

      {/* Dodatna slika na dno */}
 
    </main>
  );
};

export default WebDizajnPage;
