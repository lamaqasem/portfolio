import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Weather Dashboard",
    description: "A beautiful weather application with location-based forecasts, interactive maps, and personalized weather alerts.",
    image: "https://images.unsplash.com/photo-1643620831454-f62e59f3f8b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    tags: ["React", "API", "Charts"],
    live: "https://lamaqasem.github.io/Weather-Dashboard/",
    github: "https://github.com/lamaqasem/Weather-Dashboard",
  },
  {
    title: "Lamatics",
    description: "An interactive web application showcasing custom-built tools and utilities, deployed as a live GitHub Pages project.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    tags: ["JavaScript", "HTML", "CSS"],
    live: "https://lamaqasem.github.io/Lamatics/index.html",
    github: "https://github.com/lamaqasem/Lamatics",
  },
  {
    title: "Fixly",
    description: "A service platform project focused on connecting users with repair and maintenance solutions.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    tags: ["PHP", "Web App"],
    github: "https://github.com/lamaqasem/fixly.ps",
  },
  {
    title: "Garage AI Network",
    description: "An AI-driven network project exploring smart connectivity and automation concepts for garage and automotive systems.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    tags: ["AI", "Networking"],
    github: "https://github.com/lamaqasem/garage-ai-network",
  },
  {
    title: "Savory Notes",
    description: "A cozy recipe-sharing app where users can browse, save, and organize their favorite recipes with beautiful step-by-step instructions.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    tags: ["React", "UI/UX", "Recipes"],
  },
  {
    title: "ShopEase",
    description: "A sleek e-commerce storefront concept with product browsing, cart management, and a smooth, modern checkout experience.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    tags: ["React", "E-Commerce", "UI/UX"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50/30 via-transparent to-pink-50/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
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
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const primaryLink = project.live || project.github;

            return (
              <motion.a
                key={project.title}
                href={primaryLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl overflow-hidden bg-white/70 backdrop-blur-sm border border-pink-100 shadow-sm hover:shadow-2xl hover:shadow-pink-200/40 transition-all duration-500 cursor-pointer block"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.github && (
                      <span
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(project.github, "_blank", "noopener,noreferrer");
                        }}
                        className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-pink-500 hover:text-white transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </span>
                    )}
                    {project.live && (
                      <span
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(project.live, "_blank", "noopener,noreferrer");
                        }}
                        className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-pink-500 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl mb-3 text-gray-800" style={{ fontWeight: 600 }}>
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-pink-100 text-pink-600 border border-pink-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
