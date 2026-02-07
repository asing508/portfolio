"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Github,
  ExternalLink,
  Folder,
  Star,
  GitFork,
  ArrowUpRight,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MigrateMate",
    subtitle: "AI Code Migration Platform",
    description:
      "An automated tool that modernizes Python web applications by converting Flask to FastAPI. Uses AI to intelligently translate code, handling request updates, imports, and async optimization.",
    longDescription:
      "MigrateMate is an AI-powered tool that automatically migrates Flask applications to FastAPI. Simply upload your project, and it handles the conversion - transforming Blueprints to APIRouters, converting request handling patterns, updating decorators, and generating proper async code with modern features for faster performance.",
    image: "/projects/migratemate.png",
    technologies: [
      "Python",
      "FastAPI",
      "Next.js",
      "Docker",
      "Gemini 2.0",
      "Neo4j",
      "Redis",
      "PostgreSQL",
    ],
    github: "https://github.com/asing508/MigrateMate",
    live: "",
    featured: true,
    color: "from-cyan-500 to-blue-500",
    stats: { stars: 0, forks: 0 },
  },
  {
    id: 2,
    title: "Library Management System",
    subtitle: "Full-Stack Database Application",
    description:
      "A comprehensive library management application with real-time dashboard, book catalog management, staff accounts with bcrypt security, and circulation tracking.",
    longDescription:
      "A full-stack database application designed to manage library inventories, reader registrations, and borrowing transactions. Features include a real-time statistics dashboard, secure staff authentication with bcrypt password hashing, and a complete circulation system that validates inventory availability.",
    image: "/projects/lms.png",
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bcrypt",
    ],
    github: "https://github.com/asing508/LMS_Project",
    live: "",
    featured: true,
    color: "from-purple-500 to-pink-500",
    stats: { stars: 0, forks: 0 },
  },
  {
    id: 3,
    title: "CampusHive",
    subtitle: "Collaborative Learning Platform",
    description:
      "A JavaFX-based desktop application for interactive community learning. Features Q&A forums, role-based interfaces, and course content discussions.",
    longDescription:
      "Campus Hive is a JavaFX application designed to foster an interactive community for instructors, students, and admins. It offers a platform for users to create posts, ask questions, and engage in discussions about course content, promoting collaborative learning and problem-solving.",
    image: "/projects/campushive.png",
    technologies: ["Java", "JavaFX", "H2 Database", "JUnit", "MVC Architecture"],
    github: "https://github.com/X-XENDROME-X/CampusHive",
    live: "",
    featured: false,
    color: "from-orange-500 to-amber-500",
    stats: { stars: 1, forks: 0 },
  },
  {
    id: 4,
    title: "AttackFence",
    subtitle: "Employee Rating Platform",
    description:
      "A Streamlit-based employee rating and evaluation platform with secure authentication, MySQL integration, and interactive dashboards.",
    longDescription:
      "An employee rating platform built with Streamlit for streamlined performance evaluations. Features secure bcrypt authentication, MySQL database integration, and an intuitive web interface for managing employee ratings and feedback.",
    image: "/projects/attackfence.png",
    technologies: ["Python", "Streamlit", "MySQL", "Bcrypt", "Data Visualization"],
    github: "https://github.com/VedantSaini12/AttackFenceProject",
    live: "",
    featured: false,
    color: "from-green-500 to-emerald-500",
    stats: { stars: 1, forks: 2 },
  },
  {
    id: 5,
    title: "Luminous Rehab",
    subtitle: "HIPAA-Compliant Health Platform",
    description:
      "A comprehensive home health medication management system built for healthcare providers. Features OCR-powered data extraction, role-based access control, and real-time analytics dashboard.",
    longDescription:
      "Developed as part of the ASU Capstone project for Qualaces Inc. The platform streamlines medication documentation for home health agencies, featuring Tesseract.js for OCR, Supabase for secure data management, and a modern React/TypeScript frontend.",
    image: "/projects/luminous.png",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Supabase",
      "PostgreSQL",
      "Tesseract.js",
      "Tailwind CSS",
    ],
    github: "",
    live: "",
    featured: true,
    color: "from-teal-500 to-cyan-500",
    stats: { stars: 0, forks: 0 },
  },
  {
    id: 6,
    title: "Physical Therapy Site",
    subtitle: "Healthcare Web Application",
    description:
      "A professional website for a physical therapy clinic with appointment scheduling, service information, and patient resources.",
    longDescription:
      "A responsive web application designed for a physical therapy practice, featuring modern UI/UX design, service showcases, and interactive elements for patient engagement.",
    image: "/projects/pt-site.png",
    technologies: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
    github: "https://github.com/asing508/physical-therapy-site",
    live: "",
    featured: false,
    color: "from-rose-500 to-pink-500",
    stats: { stars: 0, forks: 0 },
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-cyan-400 text-sm font-mono mb-4 block">
            03. Projects
          </span>
          <h2 className="section-title text-white mb-4">
            Things I&apos;ve <span className="gradient-text">built</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A collection of projects that showcase my skills in full-stack
            development, AI integration, and problem-solving.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className={`relative grid lg:grid-cols-12 gap-8 items-center ${index % 2 === 1 ? "lg:text-right" : ""
                }`}
            >
              {/* Project Image */}
              <motion.div
                className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative group">
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-xl blur-lg opacity-25 group-hover:opacity-50 transition-opacity duration-500`}
                  />
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900 border border-gray-800">
                    {/* PLACEHOLDER: Replace with actual project image */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Folder size={80} className="text-gray-700" />
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        >
                          <Github size={24} className="text-white" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        >
                          <ExternalLink size={24} className="text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project Info */}
              <div
                className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-1" : ""
                  }`}
              >
                <span className="text-cyan-400 text-sm font-mono">
                  Featured Project
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{project.subtitle}</p>

                <div className="relative">
                  <div className="glass-card p-6">
                    <p className="text-gray-400 leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>
                </div>

                <div
                  className={`flex flex-wrap gap-2 mt-6 ${index % 2 === 1 ? "lg:justify-end" : ""
                    }`}
                >
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-mono text-gray-400 bg-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  className={`flex items-center gap-6 mt-6 ${index % 2 === 1 ? "lg:justify-end" : ""
                    }`}
                >
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={22} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={22} />
                    </a>
                  )}
                  {(project.stats.stars > 0 || project.stats.forks > 0) && (
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      {project.stats.stars > 0 && (
                        <span className="flex items-center gap-1">
                          <Star size={14} />
                          {project.stats.stars}
                        </span>
                      )}
                      {project.stats.forks > 0 && (
                        <span className="flex items-center gap-1">
                          <GitFork size={14} />
                          {project.stats.forks}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Other Noteworthy Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="glass-card p-6 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center`}
                  >
                    <Folder className="text-white" size={24} />
                  </div>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-white transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-white transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-500 text-sm mb-3">{project.subtitle}</p>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded text-xs font-mono text-gray-500 bg-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 rounded text-xs font-mono text-gray-600">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/asing508"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors group"
          >
            View All Projects on GitHub
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
