import { motion } from "motion/react";
import { Briefcase, GraduationCap } from "lucide-react";
import {Heart } from "lucide-react";
import { Sparkles } from "lucide-react";
import {Users } from "lucide-react";

const timeline = [
  {
    type: "education",
    icon: GraduationCap,
    title: "Bachelor of Computer Science",
    organization: "An-Najah National University",
    period: "2022 - 2026",
    description:
      "Currently in my final year, focusing on software engineering, web development, and data analysis.",
  },
  {
    type: "experience",
    icon: Briefcase,
    title: "Front-End Development Projects",
    organization: "Personal & Academic Projects",
    period: "2024 - Present",
    description:
      "Developed multiple responsive web applications using HTML, CSS, JavaScript, and React. Focused on clean UI design and user experience.",
  },
  {
    type: "experience",
    icon: Sparkles,
    title: "Machine Learning & AI Learning",
    organization: "DataCamp & Online Platforms",
    period: "2024 - Present",
    description:
      "Gained foundational knowledge in Machine Learning and Artificial Intelligence, including data analysis, AI ethics, and practical exercises.",
  },
  {
  type: "experience",
  icon: Heart,
  title: "Volunteer & Community Engagement",
  organization: "University & Community Organizations",
  period: "2025 - Present",
  description:
    "Actively involved in several university and community organizations such as Najah AI Community and Najah Innovation Park. Participated in organizing events, collaborating within teams, and contributing to community-driven initiatives. This experience strengthened my leadership, communication, and teamwork skills in dynamic environments.",
},
];

export default function Experience() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white/50 to-pink-50/30">
      <div className="max-w-4xl mx-auto">
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
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-300 via-purple-300 to-pink-300" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br ${
                  item.type === "education"
                    ? "from-purple-400 to-pink-400"
                    : "from-pink-400 to-pink-500"
                } flex items-center justify-center shadow-lg z-10`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content card */}
                <div className={`flex-1 ml-28 md:ml-0 ${
                  index % 2 === 0
                    ? "md:pr-12 md:text-right"
                    : "md:pl-12 md:text-left"
                } md:w-1/2`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-pink-100 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-xs mb-3">
                      {item.period}
                    </div>
                    <h3 className="text-lg mb-1 text-gray-800" style={{ fontWeight: 600 }}>
                      {item.title}
                    </h3>
                    <p className="text-pink-600 mb-3">{item.organization}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
