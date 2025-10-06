'use client';
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ContactSection() {
  const router = useRouter();

  return (
    <section className="bg-[#FFBD00] min-h-[50vh] sm:min-h-[50vh] md:min-h-[70vh] lg:min-h-[90vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden py-0 sm:py-0">
      {/* Mali tekst */}
      <motion.div
        className="
          mb-2 sm:mb-0
          w-full
          sm:absolute sm:top-6 sm:left-8 lg:top-12 lg:left-20 sm:translate-x-0
          flex flex-col items-center sm:items-start
        "
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-[#080D10] font-semibold max-w-[85vw] sm:max-w-sm md:max-w-md lg:max-w-lg
                    text-[clamp(0.75rem,1.8vw,1rem)] sm:text-[clamp(0.875rem,1.8vw,1.125rem)]
                    md:text-[clamp(1rem,1.8vw,1.25rem)] lg:text-[clamp(1.25rem,1.5vw,1.5rem)] leading-relaxed
                    text-center sm:text-left
                    pl-0 sm:pl-3 lg:pl-6 border-l-0 sm:border-l-2 lg:border-l-3 border-[#080D10] relative">
          OVO JE ONO ŠTO RADIMO.
          <br />
          ZAMISLITE ŠTO MOŽEMO NAPRAVITI ZA VAS.
          
          {/* Horizontalna linija na mobilnim */}
          <motion.span
            className="absolute left-1/2 bottom-0 w-0 h-[1.5px] sm:hidden bg-[#080D10] mt-1"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            style={{ transformOrigin: "left", translateX: "-50%" }}
          />
        </p>
      </motion.div>

      {/* Glavni tekst */}
      <div className="mt-3 sm:mt-12 lg:mt-0 flex flex-col items-center lg:items-end justify-center lg:flex-1 text-center lg:text-right">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="font-extrabold text-[#080D10] leading-tight text-[clamp(2.25rem,6vw,4.5rem)] sm:text-[clamp(3rem,5.5vw,5.5rem)] md:text-[clamp(3.5rem,5vw,6.5rem)] lg:text-[clamp(5rem,7vw,9rem)] mb-0"
        >
          STVORIMO
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative inline-block font-extrabold text-[#080D10] leading-tight text-[clamp(2.25rem,6vw,4.5rem)] sm:text-[clamp(3rem,5.5vw,5.5rem)] md:text-[clamp(3.5rem,5vw,6.5rem)] lg:text-[clamp(5rem,7vw,9rem)]"
        >
          NEŠTO{" "}
          <span className="relative inline-block">
            POSEBNO
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute left-[-10%] -bottom-1 sm:-bottom-1.5 lg:-bottom-3 w-[120%] h-[clamp(0.4rem,1.8vw,1.2rem)] sm:h-[clamp(0.75rem,1.8vw,1.5rem)] md:h-[clamp(1rem,1.8vw,2rem)] lg:h-[clamp(1.5rem,2.5vw,3rem)] origin-left"
              style={{
                backgroundImage: "url('/underline/contact.png')",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            />
          </span>
        </motion.h1>
      </div>

      {/* Gumb */}
      <motion.button
        onClick={() => router.push("/contact")}
        whileHover={{ 
          scale: 1.05,
          y: -3,
          boxShadow: "0 15px 30px rgba(8, 13, 16, 0.2)",
          backgroundColor: "#080D10",
          color: "#FFBD00"
        }}
        whileTap={{ 
          scale: 0.95,
          y: 2
        }}
        animate={{
          y: [0, -2, 0],
          boxShadow: [
            "0 4px 10px rgba(8, 13, 16, 0.1)",
            "0 8px 20px rgba(8, 13, 16, 0.15)",
            "0 4px 10px rgba(8, 13, 16, 0.1)"
          ]
        }}
        transition={{ 
          duration: 0.3,
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className="mt-4 sm:mt-6 lg:mt-0 mb-4 lg:mb-12 px-5 py-1.5 sm:px-7 sm:py-2.5 lg:px-9 lg:py-3.5 rounded-xl bg-[#EBECE7] text-[#080D10] font-semibold text-[clamp(0.8rem,1.8vw,1rem)] lg:text-[clamp(0.9rem,1.3vw,1.15rem)] shadow-lg hover:bg-[#080D10] hover:text-[#FFBD00] transition-colors duration-300 cursor-pointer relative overflow-hidden"
      >
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <span className="relative z-10">POSTANIMO PARTNERI</span>
      </motion.button>
    </section>
  );
}
