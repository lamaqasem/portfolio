import { motion } from "motion/react";
import { Code2, Palette, Sparkles, Zap } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Full-Stack Development", color: "from-pink-400 to-pink-500" },
  { icon: Palette, label: "UI/UX Design", color: "from-purple-400 to-pink-400" },
  { icon: Sparkles, label: "Creative Problem Solving", color: "from-pink-500 to-purple-500" },
  { icon: Zap, label: "Fast Learner", color: "from-purple-500 to-pink-500" },
];

export default function About() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-50/30 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2
            className="mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: 700,
              background: "linear-gradient(135deg, #ff1493 0%, #c71585 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I’m a Computer Science student at An-Najah National University, passionate about front-end development and building clean, user-friendly interfaces.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I enjoy turning ideas into real web experiences using modern technologies like React and JavaScript.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I’m also interested in data analysis, Machine Learning, and Artificial Intelligence, and continuously improving my skills through courses and practical projects.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              My graduation project, <span style={{ fontWeight: 600 }}>Garage AI Network</span>, combines Machine Learning, IoT, and networking to explore smart automation for garage and automotive systems — the project I'm most proud of.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-pink-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-gray-700 leading-snug">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
