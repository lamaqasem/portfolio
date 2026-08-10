import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-[10%] w-24 h-24 rounded-full bg-gradient-to-br from-pink-200/40 to-purple-200/40 blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-40 right-[15%] w-32 h-32 rounded-full bg-gradient-to-br from-pink-300/30 to-pink-100/30 blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-32 left-[20%] w-28 h-28 rounded-full bg-gradient-to-br from-purple-200/40 to-pink-200/40 blur-2xl"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-pink-200/50 mb-8"
        >
          <Sparkles className="w-4 h-4 text-pink-500" />
          <span className="text-sm text-pink-600">Available for Opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(3rem, 8vw, 5rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            background: "linear-gradient(135deg, #ff1493 0%, #ff69b4 50%, #c71585 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}
        >
         Lama Qasem
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-3">
            Computer Science Student
          </h2>
          <p className="text-lg text-pink-600/80 max-w-2xl mx-auto">
            Building elegant digital experiences with code, creativity . 
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <button
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full hover:shadow-lg hover:shadow-pink-300/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 bg-white/80 backdrop-blur-sm text-pink-600 border-2 border-pink-300 rounded-full hover:bg-pink-50 transition-all duration-300 hover:scale-105"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-pink-300 flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-2 bg-pink-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
