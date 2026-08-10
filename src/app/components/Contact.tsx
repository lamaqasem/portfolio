import { motion } from "motion/react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

// Replace with your real email address
const CONTACT_EMAIL = "q.qlama2004@gmail.com";

const socialLinks = [
  { icon: Github, label: "GitHub", url: "https://github.com/lamaqasem", color: "hover:bg-gray-700" },
  { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/lama-qasim-a425a9324?utm_source=share_via&utm_content=profile&utm_medium=member_ios", color: "hover:bg-blue-600" },
  { icon: Mail, label: "Social Media", url: "https://linktr.ee/q.lama", color: "hover:bg-pink-600" },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${name || "a visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50/30 via-pink-100/20 to-pink-50/30 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
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
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full mb-4" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl mb-6 text-gray-800" style={{ fontWeight: 600 }}>
              Send me a message
            </h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-pink-200 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-pink-200 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all"
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-pink-200 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-2xl hover:shadow-lg hover:shadow-pink-300/50 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                style={{ fontWeight: 500 }}
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:pt-12"
          >
            <h3 className="text-xl mb-6 text-gray-800" style={{ fontWeight: 600 }}>
              Connect with me
            </h3>
            <div className="space-y-4 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-pink-100 hover:border-pink-300 hover:shadow-md transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center transition-all duration-300 ${social.color} group-hover:text-white`}>
                    <social.icon className="w-6 h-6" />
                  </div>
                  <span className="text-gray-700 group-hover:text-pink-600 transition-colors">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-100/60 to-purple-100/60 backdrop-blur-sm border border-pink-200">
              <p className="text-sm text-gray-700 leading-relaxed">
                <span className="block mb-2" style={{ fontWeight: 600 }}>💼 Looking for opportunities?</span>
                I'm currently seeking internship and entry-level positions in software engineering and web development.
                Let's build something amazing together!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
