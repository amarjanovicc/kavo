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
      {/* Naslov - Exact layout as in the image */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
        className="text-center mb-6 w-full"
      >
        <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-black leading-[0.9] tracking-tight">
          GRAFIČKI
          <br />
          DIZAJN
        </h1>
      </motion.div>

      {/* Podnaslov */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
        className="uppercase text-xs md:text-sm font-semibold mb-6 max-w-md text-center leading-tight tracking-wide"
      >
Grafički dizajn pretvara ideje u vizualnu priču. On daje oblik vašem brendu kroz letke, bannere, kataloge, digitalne i print materijale. Dobar dizajn ne samo da izgleda lijepo, već jasno prenosi poruku i ističe vas pred konkurencijom.      </motion.p>

      {/* Horizontalna linija */}
      <motion.hr
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
        className="w-full max-w-5xl border-[#080D10] border-opacity-50 mb-16"
      />

      <div className="w-full max-w-7xl space-y-16 md:space-y-20">
        {/* 1. Vizualna privlačnost - Tekst lijevo, slika desno */}
        <section className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          <div className="flex-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg text-left"
            >
              <h3 className="text-[clamp(1rem,2vw,1.5rem)] font-bold uppercase mb-3 text-[#080D10]">
                VIZUALNA PRIVLAČNOST
              </h3>
              <p className="text-[clamp(0.875rem,1.5vw,1.125rem)] leading-relaxed text-[#080D10] font-medium">
                DOBAR DIZAJN ODMAH PRIVLAČI POGLED I OSTAVLJA DOJAM. PAZIMO DA SVAKA VAŠA GRAFIKA BUDE MODERNA, ČISTA I PRILAGOĐENA VAŠOJ CILJANOJ PUBLICI. TO ZNAČI VIŠE KLIKOVA, VEĆU PAŽNJU I BOLJU KOMUNIKACIJU.
              </p>
            </motion.div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <Image
              src="/GrafickiDizajn/GrafickiDizajn1.png"
              alt="Grafički dizajn ilustracija"
              width={400}
              height={400}
              className="w-full max-w-sm lg:max-w-md h-auto"
            />
          </div>
        </section>

        {/* Rest of the component remains the same */}
        {/* 2. Fleksibilnost i kreativnost - Slika lijevo, tekst desno */}
        <section className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 lg:gap-16">
          <div className="flex-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg text-right"
            >
              <h3 className="text-[clamp(1rem,2vw,1.5rem)] font-bold uppercase mb-3 text-[#080D10]">
                FLEKSIBILNOST I KREATIVNOST
              </h3>
              <p className="text-[clamp(0.875rem,1.5vw,1.125rem)] leading-relaxed text-[#080D10] font-medium">
                SVAKI PROJEKT JE DRUGAČIJI. ZATO NUDIMO DIZAJN RJEŠENJA ZA LETKE, KATALOGE, BANNERE, DRUŠTVENE MREŽE, MAJICE, PAKIRANJA I JOŠ PUNO VIŠE. MOŽEMO NAPRAVITI JEDNOSTAVNIJA I BRZA RJEŠENJA ILI POTPUNO UNIKATNE DIZAJNE OD NULE – SVE OVISI O VAŠIM CILJEVIMA I POTREBAMA.
              </p>
            </motion.div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-start">
            <Image
              src="/GrafickiDizajn/GrafickiDizajn2.png"
              alt="Kreativni dizajn ilustracija"
              width={400}
              height={400}
              className="w-full max-w-sm lg:max-w-md h-auto"
            />
          </div>
        </section>

        {/* 3. Što nam je potrebno od vas - Tekst lijevo, slika desno */}
        <section className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          <div className="flex-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg text-left"
            >
              <h3 className="text-[clamp(1rem,2vw,1.5rem)] font-bold uppercase mb-3 text-[#080D10]">
                ŠTO NAM JE POTREBNO OD VAS
              </h3>
              <p className="text-[clamp(0.875rem,1.5vw,1.125rem)] leading-relaxed text-[#080D10] font-medium">
                DA BI DIZAJN BIO ŠTO UČINKOVITIJI, TREBAMO ZNATI: <br /> - ŠTO VAŠ POSTOJEĆI VIZUALNI IDENTITET TRENUTNO KOMUNICIRA, <br /> - ŽELITE LI DA DIZAJN NAGLAŠAVA BREND, PROIZVOD ILI NEKU TREĆU VRIJEDNOST, <br /> - GDJE ĆE SE DIZAJNI KORISTITI (DIGITAL, PRINT, ILI OBOJE)... <br /> ŠTO JASNIJE ZNAMO KONTEKST, TO BOLJE MOŽEMO POGODITI DIZAJN KOJI KOMUNICIRA PRAVU PORUKU.
              </p>
            </motion.div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <Image
              src="/GrafickiDizajn/GrafickiDizajn3.png"
              alt="Brendiranje ilustracija"
              width={400}
              height={400}
              className="w-full max-w-sm lg:max-w-md h-auto"
            />
          </div>
        </section>

        {/* 4. Isporuka - Slika lijevo, tekst desno */}
        <section className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 lg:gap-16 mb-16">
          <div className="flex-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg text-right"
            >
              <h3 className="text-[clamp(1rem,2vw,1.5rem)] font-bold uppercase mb-3 text-[#080D10]">
                ISPORUKA
              </h3>
              <p className="text-[clamp(0.875rem,1.5vw,1.125rem)] leading-relaxed text-[#080D10] font-medium">
                GOTOVE DIZAJNE PREDAJEMO U SVIM FORMATIMA KOJI SU VAM POTREBNI, OD DIGITALNIH DO PRINTA. TIME STE ODMAH SPREMNI KORISTITI MATERIJALE NA SVIM KANALIMA BEZ DODATNIH PRILAGODBI.
              </p>
            </motion.div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-start">
            <Image
              src="/GrafickiDizajn/GrafickiDizajn4.png"
              alt="Isporuka ilustracija"
              width={400}
              height={400}
              className="w-full max-w-sm lg:max-w-md h-auto"
            />
          </div>
        </section>
      </div>

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
};

export default GrafickiDizajnPage;