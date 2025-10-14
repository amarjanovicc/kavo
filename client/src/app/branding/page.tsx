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
    <main className="bg-[#FFBD00] text-[#080D10] min-h-screen pt-28 md:pt-36 flex flex-col items-center px-4 md:px-8 lg:px-16">
      {/* Naslov */}
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
        className="text-[clamp(2.5rem,6vw,6rem)] font-extrabold mb-6 tracking-tight text-center"
      >
        BRANDING
      </motion.h1>

      {/* Podnaslov */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
        className="text-base md:text-lg font-semibold mb-6 max-w-2xl text-center px-4 leading-relaxed"
      >
        Brending je više od logotipa, to je osjećaj koji ostavljate na ljude. To je
        priča, vrijednosti i dojam koji vaš brend gradi kod kupaca. Dobro postavljen
        brending stvara povjerenje, prepoznatljivost i lojalnost.
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
                Prepoznatljivost i identitet
              </h2>
              <p className="text-[clamp(1rem,1.8vw,1.25rem)] leading-relaxed text-[#080D10] text-left">
                Jak brend znači da se tvoj proizvod ili usluga ističe u masi. Pazimo
                da tvoja priča i vizualni identitet budu jasni, konzistentni i lako
                prepoznatljivi. To znači više povjerenja i lojalnosti kod tvojih
                kupaca.
              </p>
            </div>
          </motion.div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/branding/Branding1.png"
              alt="Prepoznatljivost i identitet ilustracija"
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
                Strategija i fleksibilnost
              </h2>
              <p className="text-[clamp(1rem,1.8vw,1.25rem)] leading-relaxed text-[#080D10] text-right">
                Svaki brend ima svoju priču i ciljeve. Zato nudimo rješenja
                prilagođena baš vama, od manjih dorada i osvježavanja vizualnog
                identiteta do kompletne strategije i izgradnje brend od nule.
                Možete birati: brzu i jednostavnu nadogradnju postojećeg identiteta
                ili potpuno custom rješenje koje autentično prikazuje tko ste.
              </p>
            </div>
          </motion.div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/branding/Branding2.png"
              alt="Strategija i fleksibilnost ilustracija"
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
                Da bismo napravili brend koji stvarno predstavlja vas, trebamo
                razumjeti: <br />
                - Kakav osjećaj želite da vaš vizualni identitet ostavi <br />
                - Koju priču vaš brend prenosi <br />
                - Tko su vaši ciljni kupci i kakvi su vaši ciljevi <br />
                Što nam više informacija date, to će vaš brend biti autentičniji i
                snažniji.
              </p>
            </div>
          </motion.div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/branding/Branding3.png"
              alt="Što nam je potrebno od vas ilustracija"
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
                Implementacija
              </h2>
              <p className="text-[clamp(1rem,1.8vw,1.25rem)] leading-relaxed text-[#080D10] text-right">
                Kada je brend spreman, pokazujemo kako samostalno održavati
                dosljednost brend. Naš cilj je da vaš brend raste zajedno s vama.
              </p>
            </div>
          </motion.div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/branding/Branding4.png"
              alt="Implementacija ilustracija"
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

export default BrandingPage;