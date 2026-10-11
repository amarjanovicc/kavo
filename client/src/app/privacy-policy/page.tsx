"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="w-full bg-[#080D10] text-white min-h-screen py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 max-w-4xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-6 mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-yellow-400 uppercase leading-tight">
            Pravila privatnosti
          </h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto max-w-xs"
          />
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Vaša privatnost je za nas prioritet. Ovdje možete pronaći sve informacije o tome kako upravljamo vašim podacima.
          </p>
        </motion.div>

        {/* Sadržaj */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-12"
        >
          
          {/* Općenito */}
          <motion.section variants={fadeInUp} className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400 border-l-4 border-yellow-400 pl-4">
              1. Općenito
            </h2>
            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-gray-600/30">
              <p className="text-gray-300 leading-relaxed mb-4">
                Ova stranica (u daljnjem tekstu: &ldquo;Stranica&rdquo;) je <strong>osobni, nekomercijalni projekt</strong>
                njezinih autora (u daljnjem tekstu: &ldquo;mi&rdquo;, &ldquo;nas&rdquo;). Kavo nije registrirana tvrtka ni obrt, ne prodaje
                proizvode niti usluge i ne izdaje ponude ni račune. Stranica služi isključivo kao osobni portfolio.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Poštujemo vašu privatnost i obvezujemo se zaštititi vaše osobne podatke. Ova politika privatnosti 
                objašnjava kako prikupljamo, koristimo i štitimo vaše informacije kada koristite našu web stranicu.
              </p>
            </div>
          </motion.section>

          {/* Prikupljanje podataka */}
          <motion.section variants={fadeInUp} className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400 border-l-4 border-yellow-400 pl-4">
              2. Prikupljanje podataka
            </h2>
            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-gray-600/30">
              <h3 className="text-xl font-semibold text-white mb-3">Osobni podaci</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Prikupljamo sljedeće osobne podatke:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Ime i prezime</li>
                <li>Email adresa</li>
                <li>Sadržaj poruke koju nam dobrovoljno pošaljete</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-white mb-3">Automatski prikupljeni podaci</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>IP adresa</li>
                <li>Informacije o pregledniku</li>
                <li>Informacije o uređaju</li>
                <li>Podaci o korištenju stranice</li>
              </ul>
            </div>
          </motion.section>

          {/* Kolačići */}
          <motion.section variants={fadeInUp} className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400 border-l-4 border-yellow-400 pl-4">
              3. Kolačići (Cookies)
            </h2>
            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-gray-600/30">
              <p className="text-gray-300 leading-relaxed mb-4">
                Naša stranica koristi kolačiće za poboljšanje korisničkog iskustva. Kolačići su male tekstualne 
                datoteke koje se pohranjuju na vašem uređaju.
              </p>
              
              <h3 className="text-xl font-semibold text-white mb-3">Vrste kolačića koje koristimo:</h3>
              <div className="space-y-4">
                <div className="bg-white/5 rounded p-4">
                  <h4 className="font-semibold text-yellow-400 mb-2">Potrebni kolačići</h4>
                  <p className="text-gray-300 text-sm">
                    Omogućavaju osnovne funkcionalnosti stranice i ne mogu se onemogućiti.
                  </p>
                </div>
                
                <div className="bg-white/5 rounded p-4">
                  <h4 className="font-semibold text-yellow-400 mb-2">Analitički kolačići</h4>
                  <p className="text-gray-300 text-sm">
                    Pomažu nam razumjeti kako korisnici koriste našu stranicu (Google Analytics).
                  </p>
                </div>
                
                <div className="bg-white/5 rounded p-4">
                  <h4 className="font-semibold text-yellow-400 mb-2">Funkcionalni kolačići</h4>
                  <p className="text-gray-300 text-sm">
                    Omogućavaju poboljšane funkcionalnosti i personalizaciju.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Korištenje podataka */}
          <motion.section variants={fadeInUp} className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400 border-l-4 border-yellow-400 pl-4">
              4. Korištenje podataka
            </h2>
            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-gray-600/30">
              <p className="text-gray-300 leading-relaxed mb-4">
                Vaše podatke koristimo u sljedeće svrhe:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Odgovaranje na vaše poruke</li>
                <li>Poboljšanje naše web stranice</li>
                <li>Analiza korištenja stranice</li>
                <li>Ispunjavanje pravnih obveza</li>
              </ul>
            </div>
          </motion.section>

          {/* Dijeljenje podataka */}
          <motion.section variants={fadeInUp} className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400 border-l-4 border-yellow-400 pl-4">
              5. Dijeljenje podataka
            </h2>
            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-gray-600/30">
              <p className="text-gray-300 leading-relaxed mb-4">
                Ne prodajemo, ne mijenjamo niti ne ustupujemo vaše osobne podatke trećim stranama, osim u sljedećim slučajevima:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Kada damo svoj pristanak</li>
                <li>Pružateljima tehničkih usluga potrebnih za rad stranice (npr. hosting, email servisi)</li>
                <li>Kada to zahtijeva zakon</li>
                <li>Za zaštitu naših prava i sigurnosti</li>
              </ul>
            </div>
          </motion.section>

          {/* Vaša prava */}
          <motion.section variants={fadeInUp} className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400 border-l-4 border-yellow-400 pl-4">
              6. Vaša prava (GDPR)
            </h2>
            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-gray-600/30">
              <p className="text-gray-300 leading-relaxed mb-4">
                Prema Općoj uredbi o zaštiti podataka (GDPR), imate sljedeća prava:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded p-4">
                  <h4 className="font-semibold text-yellow-400 mb-2">Pravo pristupa</h4>
                  <p className="text-gray-300 text-sm">Možete zatražiti kopiju svojih podataka</p>
                </div>
                
                <div className="bg-white/5 rounded p-4">
                  <h4 className="font-semibold text-yellow-400 mb-2">Pravo ispravka</h4>
                  <p className="text-gray-300 text-sm">Možete zatražiti ispravak netočnih podataka</p>
                </div>
                
                <div className="bg-white/5 rounded p-4">
                  <h4 className="font-semibold text-yellow-400 mb-2">Pravo brisanja</h4>
                  <p className="text-gray-300 text-sm">Možete zatražiti brisanje svojih podataka</p>
                </div>
                
                <div className="bg-white/5 rounded p-4">
                  <h4 className="font-semibold text-yellow-400 mb-2">Pravo prenosivosti</h4>
                  <p className="text-gray-300 text-sm">Možete zatražiti prenos podataka</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Sigurnost */}
          <motion.section variants={fadeInUp} className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400 border-l-4 border-yellow-400 pl-4">
              7. Sigurnost podataka
            </h2>
            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-gray-600/30">
              <p className="text-gray-300 leading-relaxed mb-4">
                Koristimo odgovarajuće tehničke i organizacijske mjere za zaštitu vaših podataka:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>SSL enkripcija za sve komunikacije</li>
                <li>Sigurni serveri s redovitim ažuriranjima</li>
                <li>Pristup podacima imaju samo autori projekta</li>
                <li>Redovito sigurnosno kopiranje podataka</li>
              </ul>
            </div>
          </motion.section>

          {/* Kontakt */}
          <motion.section variants={fadeInUp} className="space-y-4">
            <h2 className="text-2xl font-bold text-yellow-400 border-l-4 border-yellow-400 pl-4">
              8. Kontakt
            </h2>
            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-gray-600/30">
              <p className="text-gray-300 leading-relaxed mb-4">
                Za sva pitanja vezana uz privatnost podataka možete nas kontaktirati:
              </p>
              <div className="space-y-2 text-gray-300">
                <p><strong>Email:</strong> hi@kavo.studio</p>
              </div>
            </div>
          </motion.section>

          {/* Zadnja izmjena */}
          <motion.section variants={fadeInUp} className="space-y-4">
            <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-6">
              <p className="text-yellow-400 font-semibold mb-2">Zadnja izmjena</p>
              <p className="text-gray-300">
                Ova politika privatnosti zadnji put je ažurirana 11. listopada 2026. 
                Zadržavamo pravo mijenjanja ove politike u bilo koje vrijeme.
              </p>
            </div>
          </motion.section>

        </motion.div>

        {/* Back to home */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 pt-8 border-t border-gray-700/50"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#080D10] font-bold rounded-lg shadow-lg shadow-yellow-400/25 hover:shadow-yellow-400/40 transition-all duration-300 uppercase tracking-wide"
            >
              ← Povratak na početnu
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}