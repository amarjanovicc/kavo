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
    <main className="bg-[#FFBD00] text-[#080D10] min-h-screen pt-32 md:pt-40 flex flex-col items-center overflow-x: hidden; ">

      {/* Naslov */}
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
        className="text-[clamp(2.5rem,6vw,6rem)] font-extrabold mb-6 tracking-tight text-center px-4"
      >
        WEB DIZAJN
      </motion.h1>

      {/* Podnaslov */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
        className="uppercase text-sm md:text-base font-semibold mb-4 w-full text-center px-4 md:px-8 leading-[127.3%] tracking-[0.5px]"
      >
Web dizajn nije samo lijep izgled – to je način da ispričate priču o svom brendu i ostavite dobar prvi dojam kod posjetitelja.      </motion.p>

      {/* Border */}
      <div className="w-4/5 h-[1px] bg-[#080D10] mx-auto mb-8 mt-8"></div>

      {/* 1. Slika → Tekst */}
      <section className="flex flex-col md:flex-row items-center mb-6 w-screen md:w-full overflow-hidden min-h-[500px]">

        {/* Slika */}
        <div className="flex-1 flex justify-center mb-6 md:mb-0">
          <Image
            src="/WebDizajn/WebDizajn1.png"
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
            <p className="text-[clamp(1rem,2.2vw,1.5rem)] leading-[127.3%] tracking-[0.5px]">
Naš cilj je da vaša stranica bude jednostavna za korištenje i ugodna za pregledavanje. Biramo boje, tipografiju i vizualne elemente koji najbolje predstavljaju vas, ali uvijek razmišljamo i o tome kako će se posjetitelji kretati kroz stranicu. Želimo da im sve bude jasno, logično i lako dostupno.            </p>
          </div>
        </motion.div>
      </section>

      {/* 2. Tekst → Slika */}
      <section className="flex flex-col md:flex-row items-center justify-between mb-6 gap-8 w-full overflow-hidden min-h-[500px]">

        {/* Tekst s pozadinskom slikom */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
          className="relative flex-1 w-full z-10"
        >
          <div className="bg-white rounded-xl shadow-lg p-10 text-[#080D10]">
            <h2 className="text-[clamp(1.5rem,4vw,3rem)] font-bold uppercase mb-4">RESPONSIVNOST</h2>
            <p className="text-[clamp(1rem,2.2vw,1.5rem)] leading-[127.3%] tracking-[0.5px]">
Većina ljudi danas pretražuje internet putem mobitela, pa je važno da stranica izgleda odlično na svakom ekranu. Zato radimo responsivan dizajn – onaj koji se automatski prilagođava mobitelu, tabletu ili računalu. Tako vaši klijenti uvijek dobivaju najbolje iskustvo, bez obzira odakle dolaze.            </p>
          </div>
        </motion.div>

        {/* Slika */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/WebDizajn/WebDizajn2.png"
            alt="Klijent ilustracija"
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
            src="/dizajn/WebDizajn3.png"
            alt="Konkurencija ilustracija"
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
          className="relative flex-1 z-10"
        >
          <div className="bg-white rounded-xl shadow-lg p-10 text-[#080D10]">
            <h2 className="text-[clamp(1.5rem,4vw,3rem)] font-bold uppercase mb-4">ZA LJUDE I TRAŽILICE</h2>
            <p className="text-[clamp(1rem,2.2vw,1.5rem)] leading-[127.3%] tracking-[0.5px]">
Dobar dizajn nije samo za ljude – voli ga i Google. Kada je stranica pregledna, brza i jednostavna za korištenje, to pomaže i boljem rangiranju na tražilicama. zato pazimo da vaša stranica bude i lijepa i funkcionalna, ali i optimizirana tako da vas potencijalni klijenti lakše pronađu.            </p>
          </div>
        </motion.div>
      </section>

      {/* Zaključak */}
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        viewport={{ once: false }}
        className="w-3/4 mx-auto mb-6 text-lg md:text-xl lg:text-2xl mt-0 font-semibold text-center leading-[140%] tracking-[0.5px]"
      >
        <div className="relative p-10 text-[#080D10] bg-[#FFBD00] rounded-lg">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">DIZAJN KOJI DONOSI REZULTATE</h2>
          <p>
Na kraju, web dizajn za nas nije samo stvar vizualnog dojma. On ima zadatak pomoći vam da ostvarite svoje ciljeve – bilo da želite privući nove klijente, prodati proizvod ili jednostavno predstaviti svoj brend na najbolji način. Naš zadatak je stvoriti dizajn koji će raditi za vas, a ne samo lijepo izgledati.          </p>
        </div>
      </motion.footer>

      <ContactSection></ContactSection>

      {/* Dodatna slika na dno - 80% širine iz dna stranice */}
      <div className="w-4/5 mx-auto relative h-[150px] sm:h-[300px] md:h-[300px] lg:h-[200px]">
        <Image
          src="/dizajn/WebDizajn4.png"
          alt="Finalna ilustracija"
          fill
          className="object-contain object-bottom"
        />
      </div>

    </main>
  );
};

export default WebDizajnPage;
