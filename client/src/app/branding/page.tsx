"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactSection from '@/components/ContactSection';


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const IstrazivanjePage: React.FC = () => {
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
        BRANDING
      </motion.h1>

      {/* Podnaslov */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
        className="uppercase text-xs md:text-sm font-semibold mb-16 max-w-md text-center leading-tight tracking-wide"
      >
        PRIJE NEGO ŠTO KRENEMO U DIZAJN I RAZVOJ, PRVO ZASTANEMO I NAPRAVIMO ONO NAJVAŽNIJE – ISTRAŽIMO.
      </motion.p>

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
              <p className="text-[clamp(0.875rem,1.5vw,1.125rem)] leading-relaxed text-[#080D10] font-medium">
                Istraživanje nam omogućuje da razumijemo vaše tržište, vaše idealne klijente i konkurenciju. To je faza koja postavlja čvrste temelje za sve što dolazi kasnije.
              </p>
            </motion.div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <Image
              src="/istrazivanje/Istrazivanje1.png"
              alt="Istraživanje ilustracija"
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
                IDEALNI KLIJENTI
              </h3>
              <p className="text-[clamp(0.875rem,1.5vw,1.125rem)] leading-relaxed text-[#080D10] font-medium">
                U ovoj fazi pokušavamo shvatiti tko su tvoji idealni klijenti, koje karakteristike imaju, kojim se poslom bave i kakve vrijednosti zastupaju. Tek kada to dobro razumijemo, možemo pronaći rješenja koja odgovaraju njihovim stvarnim potrebama i ciljevima.
              </p>
            </motion.div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-start">
            <Image
              src="/istrazivanje/Istrazivanje2.png"
              alt="Idealni klijenti ilustracija"
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
                KONKURENCIJA
              </h3>
              <p className="text-[clamp(0.875rem,1.5vw,1.125rem)] leading-relaxed text-[#080D10] font-medium">
                Istražujemo tko su Vaši glavni konkurenti, što nude i kako se predstavljaju. Analiziramo njihove web stranice, ponude i recenzije kako bismo otkrili što rade dobro i gdje postoje prilike da se vaš brend istakne.
              </p>
            </motion.div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <Image
              src="/istrazivanje/Istrazivanje3.png"
              alt="Konkurencija ilustracija"
              width={400}
              height={400}
              className="w-full max-w-sm lg:max-w-md h-auto"
            />
          </div>
        </section>

        {/* 4. Strategija - Slika lijevo, tekst desno */}
        <section className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 lg:gap-16 mb-16">
          <div className="flex-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg"
            >
              <h3 className="text-[clamp(1rem,2vw,1.5rem)] font-bold uppercase mb-3 text-[#080D10]">
                STRATEGIJA
              </h3>
              <p className="text-[clamp(0.875rem,1.5vw,1.125rem)] leading-relaxed text-[#080D10] font-medium">
                Na kraju povezujemo sve prikupljene informacije i oblikujemo jasne smjernice za Vašu buduću web stranicu. To znači da ćemo točno znati što treba naglasiti, kako se pozicionirati i na koji način kreirati Web stranicu koja će zaista privući pažnju.
              </p>
            </motion.div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-start">
            <Image
              src="/istrazivanje/Istrazivanje4.png"
              alt="Strategija ilustracija"
              width={400}
              height={400}
              className="w-full max-w-sm lg:max-w-md h-auto"
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
          Istraživanje je možda korak koji se ne vidi odmah izvana, ali ono je ono što daje čvrste temelje svemu što radimo poslije – od strategije do samog dizajna i razvoja.
        </p>
      </motion.section>
      
      
            <ContactSection></ContactSection>
      
    </main>
  );
};

export default IstrazivanjePage;
