import { motion } from "motion/react";
import {
  ArrowLeft,
  Github,
  ArrowUpRight,
  AudioLines,
  Brain,
  Server,
  MonitorSmartphone,
  Network,
} from "lucide-react";

const repos = [
  {
    title: "Car Test",
    repo: "GarageAiCarTest",
    description:
      "Machine learning and deep learning experiments for classifying car faults (belt, brake, sway) from audio.",
    tags: ["Python", "ML", "Deep Learning"],
    icon: Brain,
  },
  {
    title: "Audio Analysis",
    repo: "GarageAiAudioAnalysis",
    description:
      "A FastAPI microservice that analyzes recordings using an ensemble of four models: traditional ML, CNN, YAMNet and PANNs.",
    tags: ["Python", "FastAPI", "Ensemble"],
    icon: AudioLines,
  },
  {
    title: "Backend",
    repo: "GarageAiBackend",
    description:
      "The server side of Garage AI: APIs and logic that connect the web app to the diagnosis service.",
    tags: ["JavaScript", "API"],
    icon: Server,
  },
  {
    title: "Frontend",
    repo: "GarageAiFrontend",
    description:
      "The Garage AI web app interface, where users upload audio and see the diagnosis.",
    tags: ["TypeScript", "React"],
    icon: MonitorSmartphone,
  },
];

export default function GarageAI() {
  return (
    <section className="min-h-screen py-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50/50 via-transparent to-purple-50/40 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.a
          href="#projects"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 mb-10 px-4 py-2 rounded-full bg-white/70 border border-pink-200 hover:bg-pink-50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to projects
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h1
            className="mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 700,
              background: "linear-gradient(135deg, #ff1493 0%, #c71585 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Garage AI
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            An AI-based car fault diagnosis system that listens to a vehicle
            recording and classifies the problem. The project is split into four
            repositories. Pick one to open it on GitHub.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {repos.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.a
                key={r.repo}
                href={`https://github.com/lamaqasem/${r.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group rounded-3xl p-7 bg-white/70 backdrop-blur-sm border border-pink-100 shadow-sm hover:shadow-2xl hover:shadow-pink-200/40 transition-shadow duration-500 flex flex-col"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-pink-600" />
                  </div>
                  <span className="w-10 h-10 rounded-full border border-pink-200 flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white group-hover:border-pink-500 transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>

                <h2 className="text-2xl text-gray-800 mb-1" style={{ fontWeight: 600 }}>
                  {r.title}
                </h2>
                <p className="text-xs text-pink-500 mb-3 flex items-center gap-1">
                  <Github className="w-3 h-3" /> lamaqasem/{r.repo}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-1">
                  {r.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {r.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs rounded-full bg-pink-100 text-pink-600 border border-pink-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm group-hover:shadow-lg group-hover:shadow-pink-300/50 transition-shadow">
                  <Github className="w-4 h-4" /> Open on GitHub
                </span>
              </motion.a>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/lamaqasem/garage-ai-network"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-pink-600 transition-colors"
          >
            <Network className="w-4 h-4" /> Also see the original prototype: garage-ai-network
          </a>
        </div>
      </div>
    </section>
  );
}
