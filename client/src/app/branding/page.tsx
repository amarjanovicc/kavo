"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactSection from "@/components/ContactSection";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const BrandingPage: React.FC = () => {
  return (
    <main className="bg-[#FFBD00] text-[#080D10] min-h-screen pt-20 md:pt-32 flex flex-col items-center px-6 md:px-12 lg:px-20">
      {/* Naslov */}
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
        className="text-[clamp(3rem,8vw,8rem)] font-extrabold mb-6 tracking-tight text-center"
      >
        BRANDING
      </motion.h1>

      {/* Podnaslov */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
        className="uppercase text-xs md:text-sm font-semibold mb-6 max-w-md text-center leading-tight tracking-wide"
      >
Brending je više od logotipa, to je osjećaj koji ostavljate na ljude. To je priča, vrijednosti i dojam koji vaš brend gradi kod kupaca. Dobro postavljen brending stvara povjerenje, prepoznatljivost i lojalnost.      </motion.p>

      {/* Horizontalna linija */}
      <motion.hr
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
        className="w-full max-w-5xl border-[#080D10] border-opacity-50 mb-16"
      />

      <div className="w-full max-w-7xl space-y-16 md:space-y-20">
        {/* 1. Prepoznatljivost i identitet */}
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
                PREPOZNATLJIVOST I IDENTITET
              </h3>
              <p className="text-[clamp(0.875rem,1.5vw,1.125rem)] leading-relaxed text-[#080D10] font-medium">
                JAK BREND ZNAČI DA SE TVOJ PROIZVOD ILI USLUGA ISTIČE U MASI. PAZIMO DA TVOJA PRIČA I VIZUALNI IDENTITET BUDU JASNI, KONZISTENTNI I LAKO PREPOZNATLJIVI. TO ZNAČI VIŠE POVJERENJA I LOJALNOSTI KOD TVOJIH KUPACA.
              </p>
            </motion.div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <Image
              src="/branding/Branding1.png"
              alt="Prepoznatljivost i identitet ilustracija"
              width={400}
              height={400}
              className="w-full max-w-sm lg:max-w-md h-auto"
            />
          </div>
        </section>

        {/* 2. Strategija i fleksibilnost */}
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
                STRATEGIJA I FLEKSIBILNOST
              </h3>
              <p className="text-[clamp(0.875rem,1.5vw,1.125rem)] leading-relaxed text-[#080D10] font-medium">
                SVAKI BREND IMA SVOJU PRIČU I CILJEVE. ZATO NUDIMO RJEŠENJA PRILAGOĐENA BAŠ VAMA, OD MANJIH DORADA I OSVJEŽAVANJA VIZUALNOG IDENTITETA DO KOMPLETNE STRATEGIJE I IZGRADNJE BREND OD NULE. MOŽETE BIRATI: BRZU I JEDNOSTAVNU NADOGRADNJU POSTOJEĆEG IDENTITETA ILI POTPUNO CUSTOM RJEŠENJE KOJE AUTENTIČNO PRIKAZUJE TKO STE.
              </p>
            </motion.div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-start">
            <Image
              src="/branding/Branding2.png"
              alt="Strategija i fleksibilnost ilustracija"
              width={400}
              height={400}
              className="w-full max-w-sm lg:max-w-md h-auto"
            />
          </div>
        </section>

        {/* 3. Što nam je potrebno od vas */}
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
                DA BISMO NAPRAVILI BREND KOJI STVARNO PREDSTAVLJA VAS, TREBAMO RAZUMJETI: <br /> - KAKAV OSJEĆAJ ŽELITE DA VAŠ VIZUALNI IDENTITET OSTAVI <br /> - KOJU PRIČU VAŠ BREND PRENOSI <br /> - TKO SU VAŠI CILJNI KUPCI I KAKVI SU VAŠI CILJEVI <br /> ŠTO NAM VIŠE INFORMACIJA DATE, TO ĆE VAŠ BREND BITI AUTENTIČNIJI I SNAŽNIJI.
              </p>
            </motion.div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <Image
              src="/branding/Branding3.png"
              alt="Što nam je potrebno od vas ilustracija"
              width={400}
              height={400}
              className="w-full max-w-sm lg:max-w-md h-auto"
            />
          </div>
        </section>

        {/* 4. Implementacija */}
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
                IMPLEMENTACIJA
              </h3>
              <p className="text-[clamp(0.875rem,1.5vw,1.125rem)] leading-relaxed text-[#080D10] font-medium">
                KADA JE BREND SPREMAN, POKAZUJEMO KAKO SAMOSTALNO ODRŽAVATI DOSLJEDNOST BREND. NAŠ CILJ JE DA VAŠ BREND RASTE ZAJEDNO S VAMA.
              </p>
            </motion.div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-start">
            <Image
              src="/branding/Branding4.png"
              alt="Implementacija ilustracija"
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

export default BrandingPage;