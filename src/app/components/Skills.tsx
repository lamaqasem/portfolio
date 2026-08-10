import { motion } from "motion/react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 60 },
      { name: "Python", level: 85 },
      { name: "SQL", level: 75 },
      { name: "REST APIs", level: 50 },
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "Machine Learning", level: 80 },
      { name: "Deep Learning", level: 65 },
      { name: "Computer Vision", level: 65 },
      { name: "TensorFlow / scikit-learn", level: 70 },
    ],
  },
  {
    title: "IoT & Networking",
    skills: [
      { name: "IoT Systems", level: 70 },
      { name: "Networking Fundamentals", level: 70 },
      { name: "Embedded Systems", level: 60 },
      { name: "Automation & Smart Systems", level: 65 },
    ],
  },
  {
    title: "Tools & Other",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Figma", level: 85 },
      { name: "Data Analysis", level: 80 },
      { name: "C++", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white/50 to-pink-50/30">
      <div className="max-w-6xl mx-auto">
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
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="p-8 rounded-3xl bg-white/70 backdrop-blur-sm border border-pink-100 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl mb-6 text-pink-600" style={{ fontWeight: 600 }}>
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-700">{skill.name}</span>
                      <span className="text-xs text-pink-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-pink-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        className="h-full bg-gradient-to-r from-pink-400 to-pink-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
