"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  Bot,
  BookOpen,
  Stethoscope,
  GraduationCap,
  Shield,
  Globe,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MigrateMate",
    subtitle: "AI Code Migration Platform",
    icon: Bot,
    description:
      "An automated tool that modernizes Python web applications by converting Flask to FastAPI. Uses AI to intelligently translate code, handling request updates, imports, and async optimization.",
    longDescription:
      "MigrateMate is an AI-powered tool that automatically migrates Flask applications to FastAPI. Simply upload your project, and it handles the conversion - transforming Blueprints to APIRouters, converting request handling patterns, updating decorators, and generating proper async code with modern features for faster performance.",
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
    iconBg: "bg-cyan-500/10 border-cyan-500/30",
    iconColor: "text-cyan-400",
  },
  {
    id: 2,
    title: "Library Management System",
    subtitle: "Full-Stack Database Application",
    icon: BookOpen,
    description:
      "A comprehensive library management application with real-time dashboard, book catalog management, staff accounts with bcrypt security, and circulation tracking.",
    longDescription:
      "A full-stack database application designed to manage library inventories, reader registrations, and borrowing transactions. Features include a real-time statistics dashboard, secure staff authentication with bcrypt password hashing, and a complete circulation system that validates inventory availability.",
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
    iconBg: "bg-purple-500/10 border-purple-500/30",
    iconColor: "text-purple-400",
  },
  {
    id: 3,
    title: "CampusHive",
    subtitle: "Collaborative Learning Platform",
    icon: GraduationCap,
    description:
      "A JavaFX-based desktop application for interactive community learning. Features Q&A forums, role-based interfaces, and course content discussions.",
    longDescription:
      "Campus Hive is a JavaFX application designed to foster an interactive community for instructors, students, and admins. It offers a platform for users to create posts, ask questions, and engage in discussions about course content, promoting collaborative learning and problem-solving.",
    technologies: ["Java", "JavaFX", "H2 Database", "JUnit", "MVC Architecture"],
    github: "https://github.com/X-XENDROME-X/CampusHive",
    live: "",
    featured: false,
    color: "from-orange-500 to-amber-500",
    iconBg: "bg-orange-500/10 border-orange-500/30",
    iconColor: "text-orange-400",
  },
  {
    id: 4,
    title: "AttackFence",
    subtitle: "Employee Rating Platform",
    icon: Shield,
    description:
      "A Streamlit-based employee rating and evaluation platform with secure authentication, MySQL integration, and interactive dashboards.",
    longDescription:
      "An employee rating platform built with Streamlit for streamlined performance evaluations. Features secure bcrypt authentication, MySQL database integration, and an intuitive web interface for managing employee ratings and feedback.",
    technologies: ["Python", "Streamlit", "MySQL", "Bcrypt", "Data Visualization"],
    github: "https://github.com/VedantSaini12/AttackFenceProject",
    live: "",
    featured: false,
    color: "from-green-500 to-emerald-500",
    iconBg: "bg-green-500/10 border-green-500/30",
    iconColor: "text-green-400",
  },
  {
    id: 5,
    title: "Luminous Rehab",
    subtitle: "HIPAA-Compliant Health Platform",
    icon: Stethoscope,
    description:
      "A comprehensive home health medication management system built for healthcare providers. Features OCR-powered data extraction, role-based access control, and real-time analytics dashboard.",
    longDescription:
      "Developed as part of the ASU Capstone project for Qualaces Inc. The platform streamlines medication documentation for home health agencies, featuring Tesseract.js for OCR, Supabase for secure data management, and a modern React/TypeScript frontend.",
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
    iconBg: "bg-teal-500/10 border-teal-500/30",
    iconColor: "text-teal-400",
  },
  {
    id: 6,
    title: "Physical Therapy Site",
    subtitle: "Healthcare Web Application",
    icon: Globe,
    description:
      "A professional website for a physical therapy clinic with appointment scheduling, service information, and patient resources.",
    longDescription:
      "A responsive web application designed for a physical therapy practice, featuring modern UI/UX design, service showcases, and interactive elements for patient engagement.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
    github: "https://github.com/asing508/physical-therapy-site",
    live: "",
    featured: false,
    color: "from-rose-500 to-pink-500",
    iconBg: "bg-rose-500/10 border-rose-500/30",
    iconColor: "text-rose-400",
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
        <div className="space-y-8 mb-16">
          {featuredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="group"
              >
                <div className="glass-card p-6 md:p-8 relative overflow-hidden">
                  {/* Subtle gradient accent on hover */}
                  <div
                    className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Icon + Title */}
                    <div className="flex items-start gap-4 md:min-w-[280px]">
                      <div
                        className={`w-12 h-12 rounded-xl ${project.iconBg} border flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon size={22} className={project.iconColor} />
                      </div>
                      <div>
                        <span className="text-cyan-400 text-xs font-mono">
                          Featured Project
                        </span>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-500 text-sm">{project.subtitle}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {project.longDescription}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-full text-xs font-mono text-gray-400 bg-white/5 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-4">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                          >
                            <Github size={18} />
                            <span>Source Code</span>
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                          >
                            <ExternalLink size={18} />
                            <span>Live Demo</span>
                          </a>
                        )}
                        {!project.github && !project.live && (
                          <span className="text-xs text-gray-600 italic">
                            Private repository
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  onHoverStart={() => setHoveredId(project.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  className="glass-card p-6 group hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg ${project.iconBg} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon size={18} className={project.iconColor} />
                    </div>
                    <div className="flex items-center gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-white transition-colors"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-white transition-colors"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-500 text-xs mb-3">{project.subtitle}</p>
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
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
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
