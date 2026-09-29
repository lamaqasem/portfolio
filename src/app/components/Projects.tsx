import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ExternalLink,
  Github,
  Sparkles,
  Globe,
  Droplets,
  Wrench,
  CloudSun,
  BookOpen,
  ShoppingBag,
  Calculator,
  Car,
  ClipboardList,
  Bookmark,
  Plane,
  Terminal,
  Package,
  Users,
  Layout,
  FileText,
  Code2,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type Category = "Web" | "Full-Stack" | "AI & Python";

interface Project {
  title: string;
  description: string;
  tags: string[];
  category: Category;
  icon: LucideIcon;
  image?: string;
  github?: string;
  live?: string;
  /** internal page (hash route) instead of an external link */
  route?: string;
  featured?: boolean;
}

const GH = "https://github.com/lamaqasem";

const projects: Project[] = [
  {
    title: "Garage AI",
    description:
      "An AI-powered car fault diagnosis system that classifies vehicle audio (belt, brake, sway). Explore its four repositories: ML models, audio analysis service, backend and web app.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    tags: ["Python", "FastAPI", "Deep Learning", "4 Repos"],
    category: "AI & Python",
    icon: Car,
    route: "#/garage-ai",
    featured: true,
  },
  {
    title: "Fixly.ps",
    description:
      "A full-stack home services booking platform connecting Palestinian homeowners with verified technicians such as electricians, plumbers and AC specialists.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    tags: ["JavaScript", "Full-Stack", "Booking"],
    category: "Full-Stack",
    icon: Wrench,
    github: `${GH}/fixly.ps`,
    featured: true,
  },
  {
    title: "Olive Oil Report",
    description:
      "A web system that digitizes olive oil lab testing reports, built for real day-to-day use in a laboratory workflow.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Web",
    icon: Droplets,
    github: `${GH}/oliveOilReport`,
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather application with location-based forecasts, clean data cards and an easy-to-read layout.",
    image:
      "https://images.unsplash.com/photo-1643620831454-f62e59f3f8b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    tags: ["HTML", "API", "Forecasts"],
    category: "Web",
    icon: CloudSun,
    live: "https://lamaqasem.github.io/Weather-Dashboard/",
    github: `${GH}/Weather-Dashboard`,
    featured: true,
  },
  {
    title: "Lamatics",
    description:
      "A Computer Science study hub, an interactive web app with custom-built tools and resources, live on GitHub Pages.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Web",
    icon: BookOpen,
    live: "https://lamaqasem.github.io/Lamatics/index.html",
    github: `${GH}/Lamatics`,
    featured: true,
  },
  {
    title: "Kashop",
    description:
      "An online shop project built with React and Vite, featuring product browsing and a modern storefront experience.",
    tags: ["React", "Vite", "E-Commerce"],
    category: "Full-Stack",
    icon: ShoppingBag,
    github: `${GH}/kashop-final`,
  },
  {
    title: "Compiler Project",
    description:
      "A compiler project written in Python, exploring how source code is analyzed and translated step by step.",
    tags: ["Python", "Compilers"],
    category: "AI & Python",
    icon: Terminal,
    github: `${GH}/compilerProject`,
  },
  {
    title: "Portfolio",
    description:
      "This very website: a feminine, animated personal portfolio built with React, Tailwind and Motion.",
    tags: ["TypeScript", "React", "Tailwind"],
    category: "Web",
    icon: Sparkles,
    github: `${GH}/portfolio`,
  },
  {
    title: "Start Portfolio",
    description:
      "My first portfolio page, a simple starting point where I practiced layout, styling and structure.",
    tags: ["HTML", "CSS"],
    category: "Web",
    icon: Layout,
    github: `${GH}/startPortfolio`,
  },
  {
    title: "UMS Frontend",
    description:
      "A simple frontend for a user management system, practicing clean forms, tables and page structure.",
    tags: ["HTML", "CSS", "Frontend"],
    category: "Web",
    icon: Users,
    github: `${GH}/umsFrontendSimpleProj`,
  },
  {
    title: "Products Project",
    description:
      "A simple products listing project that renders items dynamically with JavaScript.",
    tags: ["JavaScript", "DOM"],
    category: "Web",
    icon: Package,
    github: `${GH}/productsSimpleProj`,
  },
  {
    title: "Product Section",
    description:
      "A polished product showcase section focused on responsive layout and neat card design.",
    tags: ["HTML", "CSS"],
    category: "Web",
    icon: ClipboardList,
    github: `${GH}/productSection`,
  },
  {
    title: "Bookmark",
    description:
      "A bookmark-style web app for saving and organizing links, built with vanilla JavaScript.",
    tags: ["JavaScript", "HTML", "CSS"],
    category: "Web",
    icon: Bookmark,
    github: `${GH}/bookMark`,
  },
  {
    title: "Simple Form",
    description:
      "A clean and simple form interface with tidy inputs and friendly styling.",
    tags: ["HTML", "CSS"],
    category: "Web",
    icon: FileText,
    github: `${GH}/SimpleForm`,
  },
  {
    title: "Drone Delivery",
    description:
      "A landing page concept for a drone delivery service with a modern look.",
    tags: ["HTML", "CSS"],
    category: "Web",
    icon: Plane,
    github: `${GH}/droneDelivery`,
  },
  {
    title: "Web Calculator",
    description:
      "A simple web calculator covering the basic arithmetic operations.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Web",
    icon: Calculator,
    github: `${GH}/simpleWebProj-calculater`,
  },
  {
    title: "BMW Page",
    description:
      "A BMW-inspired web page practicing hero sections, imagery and responsive design.",
    tags: ["HTML", "CSS"],
    category: "Web",
    icon: Car,
    github: `${GH}/simpleWebProj-BMW`,
  },
  {
    title: "GoIT Website",
    description:
      "A multi-section website project built with JavaScript, practicing structure and interactivity.",
    tags: ["JavaScript", "HTML", "CSS"],
    category: "Web",
    icon: Globe,
    github: `${GH}/GoITWebsite`,
  },
];

const filters: ("All" | Category)[] = ["All", "Web", "Full-Stack", "AI & Python"];

export default function Projects() {
  const [active, setActive] = useState<"All" | Category>("All");
  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50/30 via-transparent to-pink-50/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
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
              backgroundClip: "text",
            }}
          >
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full mb-5" />
          <p className="text-gray-600 max-w-xl mx-auto">
            Everything I've built and shared on GitHub, from small experiments to
            full applications.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm border transition-all duration-300 cursor-pointer ${
                active === f
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white border-transparent shadow-lg shadow-pink-200/60"
                  : "bg-white/70 text-pink-600 border-pink-200 hover:bg-pink-50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {visible.map((project, index) => {
              const Icon = project.icon;
              const isRoute = !!project.route;
              const primaryLink = project.route || project.live || project.github;

              return (
                <motion.a
                  layout
                  key={project.title}
                  href={primaryLink}
                  {...(isRoute
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: Math.min(index, 8) * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="group relative rounded-3xl overflow-hidden bg-white/70 backdrop-blur-sm border border-pink-100 shadow-sm hover:shadow-2xl hover:shadow-pink-200/40 transition-shadow duration-500 cursor-pointer flex flex-col"
                >
                  {/* Header: image or gradient + icon */}
                  <div className="relative h-52 overflow-hidden shrink-0">
                    {project.image ? (
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-pink-200 via-pink-100 to-purple-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                        <div className="w-20 h-20 rounded-3xl bg-white/70 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-pink-200/50">
                          <Icon className="w-9 h-9 text-pink-500" />
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {project.featured && (
                      <span className="absolute top-4 left-4 px-3 py-1 text-xs rounded-full bg-white/90 text-pink-600 flex items-center gap-1 shadow-sm">
                        <Sparkles className="w-3 h-3" /> Featured
                      </span>
                    )}

                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {isRoute && (
                        <span className="px-4 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center gap-1 text-sm text-pink-600">
                          View repos <ArrowUpRight className="w-4 h-4" />
                        </span>
                      )}
                      {project.github && (
                        <span
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(project.github, "_blank", "noopener,noreferrer");
                          }}
                          className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-pink-500 hover:text-white transition-colors"
                          title="GitHub"
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
                          title="Live demo"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl mb-3 text-gray-800" style={{ fontWeight: 600 }}>
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-5 leading-relaxed flex-1">
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
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a
            href={GH}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-pink-300 text-pink-600 bg-white/70 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-colors"
          >
            <Code2 className="w-4 h-4" /> See all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
