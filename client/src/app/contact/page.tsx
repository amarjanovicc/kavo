"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Simple Typewriter that reveals characters one by one and shows a blinking caret
function Typewriter({ text, speed = 25 }: { text: string; speed?: number }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplay("");
    const id = window.setInterval(() => {
      setDisplay(() => text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        window.clearInterval(id);
      }
    }, speed);

    return () => window.clearInterval(id);
  }, [text, speed]);

  return (
    <span className="typewriter inline-block">
      {display}
      <span className="ml-0.5 inline-block animate-blink">|</span>
      <style jsx>{`
        .animate-blink { animation: blink 1s steps(2,start) infinite; }
        @keyframes blink { to { opacity: 0; } }
      `}</style>
    </span>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    projectDetails: "",
    foundBy: "",
    helpWith: [] as string[],
    budget: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage] = useState("");

  const toggleMulti = (field: "helpWith", value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value],
    }));
  };

  return (
    <section className="w-full bg-[#080D10] text-white min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-24 md:py-32">
      <div className="w-full max-w-4xl mx-auto space-y-12 md:space-y-16">
        {/* H1 naslov - profesionalno oblikovan */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-6"
        >
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-yellow-400 uppercase leading-none">
            Razgovarajmo
          </h1>

          {/* Dekorativna linija - changed from gradient to solid */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px bg-yellow-400 mx-auto max-w-xs"
          />
        </motion.div>

        {/* Podnaslov - elegantno pozicioniran */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative max-w-2xl text-center">
            {/* Changed from gradient to solid line */}
            <div className="absolute -left-4 top-0 w-1 h-full bg-yellow-400 hidden md:block" />
            <p className="text-yellow-400/90 text-base md:text-lg leading-relaxed font-light">
              <Typewriter
                text="Bilo da tek skicirate ideju za svoj novi projekt ili jednostavno želite porazgovarati o digitalnim mogućnostima – sjajno! Tu smo da pretvorimo vaše misli u stvarnu, funkcionalnu i modernu web stranicu."
                speed={14}
              />
            </p>
          </div>
        </motion.div>

        {/* Status poruka */}
        {submitMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg text-center ${
              submitMessage.includes("Hvala") 
                ? "bg-green-500/20 border border-green-500/50 text-green-400" 
                : "bg-red-500/20 border border-red-500/50 text-red-400"
            }`}
          >
            {submitMessage}
          </motion.div>
        )}

        {/* Forma - profesionalno oblikovana - UPDATED WITH FORMSPREE */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          action="https://formspree.io/f/mzzjvlbn"
          method="POST"
          className="space-y-10 md:space-y-12"
          onSubmit={() => setIsSubmitting(true)}
        >
          {/* Ime i tvrtka - premium design */}
          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <label className="block text-sm font-medium text-yellow-400/80 mb-2 uppercase tracking-wide">
                Vaše ime *
              </label>
              <input
                type="text"
                name="name"
                placeholder="Unesite svoje puno ime"
                className="w-full bg-white/5 border border-gray-600/50 rounded-lg px-4 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-yellow-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <label className="block text-sm font-medium text-yellow-400/80 mb-2 uppercase tracking-wide">
                Naziv tvrtke *
              </label>
              <input
                type="text"
                name="company"
                placeholder="Unesite naziv vaše tvrtke"
                className="w-full bg-white/5 border border-gray-600/50 rounded-lg px-4 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-yellow-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                required
              />
            </motion.div>
          </div>

          {/* Email - premium design */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="group"
          >
            <label className="block text-sm font-medium text-yellow-400/80 mb-2 uppercase tracking-wide">
              Email adresa *
            </label>
            <input
              type="email"
              name="email"
              placeholder="ime@vasa-tvrtka.hr"
              className="w-full bg-white/5 border border-gray-600/50 rounded-lg px-4 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-yellow-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </motion.div>

          {/* Kako ste nas našli */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Kako ste saznali za nas?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {["Preporuke", "Google", "Društvene mreže", "Drugo"].map((opt) => (
                <motion.button
                  key={opt}
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setForm({ ...form, foundBy: opt })}
                  className={`px-4 py-3 rounded-lg font-medium border-2 transition-all duration-300 text-sm ${
                    form.foundBy === opt
                      ? "bg-yellow-400 text-[#080D10] border-yellow-400 shadow-lg shadow-yellow-400/25"
                      : "bg-white/5 border-gray-600/50 text-white hover:border-yellow-400/50 hover:bg-white/10"
                  }`}
                >
                  {opt}
                </motion.button>
              ))}
            </div>
            {/* Hidden input to store the selected option */}
            <input type="hidden" name="foundBy" value={form.foundBy} />
          </div>

          {/* Usluge */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">
              S čime vam možemo pomoći? 
              <span className="text-sm text-gray-400 font-normal ml-2">(Možete odabrati više opcija)</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              { [
                "Dizajn nove web stranice",
                "Izrada web stranice", 
                "Redizajn postojeće stranice",
                "Održavanje web stranice"
              ].map((opt) => (
                <motion.button
                  key={opt}
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toggleMulti("helpWith", opt)}
                  className={`px-4 py-4 rounded-lg font-medium border-2 transition-all duration-300 text-sm text-left ${
                    form.helpWith.includes(opt)
                      ? "bg-yellow-400 text-[#080D10] border-yellow-400 shadow-lg shadow-yellow-400/25"
                      : "bg-white/5 border-gray-600/50 text-white hover:border-yellow-400/50 hover:bg-white/10"
                  }`}
                >
                  {opt}
                </motion.button>
              ))}
            </div>
            {/* Hidden input to store the selected services */}
            <input type="hidden" name="services" value={form.helpWith.join(", ")} />
          </div>

          {/* Budžet */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Vaš planirani budžet</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {["< 1.000 €", "1.000-5.000 €", "5.000-10.000 €", "10.000+ €"].map((opt) => (
                <motion.button
                  key={opt}
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setForm({ ...form, budget: opt })}
                  className={`px-4 py-3 rounded-lg font-medium border-2 transition-all duration-300 text-sm ${
                    form.budget === opt
                      ? "bg-yellow-400 text-[#080D10] border-yellow-400 shadow-lg shadow-yellow-400/25"
                      : "bg-white/5 border-gray-600/50 text-white hover:border-yellow-400/50 hover:bg-white/10"
                  }`}
                >
                  {opt}
                </motion.button>
              ))}
            </div>
            {/* Hidden input to store the selected budget */}
            <input type="hidden" name="budget" value={form.budget} />
          </div>

          {/* Detalji projekta */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="group"
          >
            <label className="block text-sm font-medium text-yellow-400/80 mb-2 uppercase tracking-wide">
              Opišite svoj projekt
            </label>
            <textarea
              name="message"
              placeholder="Opišite svoj projekt, ciljeve, specifične potrebe..."
              className="w-full bg-white/5 border border-gray-600/50 rounded-lg px-4 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-yellow-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm resize-none"
              rows={5}
              value={form.projectDetails}
              onChange={(e) => setForm({ ...form, projectDetails: e.target.value })}
            />
          </motion.div>

          {/* Footer sa checkbox i submit */}
          <div className="space-y-6 pt-8 border-t border-gray-700/50">
            <label className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed cursor-pointer group">
              <input
                type="checkbox"
                name="consent"
                className="mt-1 accent-yellow-400 scale-110 cursor-pointer"
                required
              />
              <span className="group-hover:text-gray-300 transition-colors">
                Slanjem ovog obrasca pristajete na naše{" "}
                <Link 
                  href="/privacy-policy" 
                  className="text-yellow-400 hover:text-yellow-300 underline transition-colors"
                >
                  uvjete poslovanja i pravila privatnosti
                </Link>
                . Vaši podaci će biti korišteni isključivo za potrebe komunikacije o vašem projektu.
              </span>
            </label>

            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className={`px-12 py-4 font-bold rounded-lg shadow-lg transition-all duration-300 text-lg uppercase tracking-wide ${
                  isSubmitting
                    ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#080D10] shadow-yellow-400/25 hover:shadow-yellow-400/40"
                }`}
              >
                {isSubmitting ? "Šalje se..." : "Pošaljite upit →"}
              </motion.button>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
