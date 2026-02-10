"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Calendar,
  MapPin,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Qualaces",
    logo: "Q",
    role: "Software Engineering Intern",
    team: "Core AI Team",
    location: "Tempe, AZ",
    period: "August 2025 – December 2025",
    type: "Full-time",
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30",
    textColor: "text-cyan-400",
    highlights: [
      "Built a HIPAA-compliant SaaS platform using React, TypeScript, and Node.js, streamlining home-health documentation and reducing manual entry time",
      "Engineered data ingestion pipelines using OCR (Tesseract.js) to extract unstructured medication data, transforming it into structured SQL formats",
      "Managed a scalable PostgreSQL database via Supabase, implementing complex schemas, Row Level Security (RLS), and RBAC",
      "Collaborated with cross-functional teams in an Agile environment to integrate dashboard analytics for clinician performance monitoring",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "OCR",
      "Tesseract.js",
    ],
  },
  {
    id: 2,
    company: "Attackfence Techlabs",
    logo: "AF",
    role: "Software Engineering Intern",
    team: "",
    location: "Remote",
    period: "June 2025 – August 2025",
    type: "Full-time",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    textColor: "text-purple-400",
    highlights: [
      "Designed and maintained a relational database schema (MySQL) to support a performance evaluation CRM portal, handling records for 100+ employees",
      "Developed 4 distinct role-based dashboards (Employee, Manager, HR, Admin) to improve workflow efficiency and visualize performance metrics",
      "Optimized backend queries in Python to handle high-volume data retrieval, ensuring low-latency reporting for real-time user interactions",
      "Implemented secure authentication with brute-force prevention, ensuring the safety of sensitive employee data",
    ],
    technologies: [
      "Python",
      "MySQL",
      "Dashboard Design",
      "RBAC",
      "Security",
      "REST APIs",
    ],
  },
  {
    id: 3,
    company: "Aubot",
    logo: "Au",
    role: "Software Engineering Intern",
    team: "",
    location: "Remote",
    period: "March 2025 – May 2025",
    type: "Part-time",
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    textColor: "text-orange-400",
    highlights: [
      "Refined Java and Python data structures curriculum, creating automated test cases for student code submissions",
      "Analyzed student performance data to identify curriculum bottlenecks, improving material clarity by 15%",
      "Collaborated with content teams to refine instructional materials, accelerating platform integration by 20%",
    ],
    technologies: [
      "Java",
      "Python",
      "Data Structures",
      "Automated Testing",
      "EdTech",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section id="experience" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-cyan-400 text-sm font-mono mb-4 block">
            02. Experience
          </span>
          <h2 className="section-title text-white mb-4">
            Where I&apos;ve <span className="gradient-text">worked</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            My professional journey through internships and projects that have
            shaped my skills as a software engineer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-pink-500/50" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className={`relative mb-12 ${index % 2 === 0
                  ? "md:pr-[50%] md:text-right"
                  : "md:pl-[50%] md:ml-auto"
                }`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute ${index % 2 === 0 ? "left-0 md:right-0 md:left-auto" : "left-0"
                  } md:left-1/2 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-r ${exp.color
                  } shadow-lg`}
                style={{
                  boxShadow: `0 0 20px ${exp.color.includes("cyan")
                      ? "rgba(0, 212, 255, 0.5)"
                      : exp.color.includes("purple")
                        ? "rgba(168, 85, 247, 0.5)"
                        : "rgba(249, 115, 22, 0.5)"
                    }`,
                }}
              />

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setActiveId(exp.id)}
                onHoverEnd={() => setActiveId(null)}
                className={`glass-card p-6 ml-8 md:ml-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  } cursor-pointer`}
              >
                {/* Header */}
                <div
                  className={`flex flex-wrap items-start gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                >
                  {/* Company Logo */}
                  <div
                    className={`w-12 h-12 rounded-xl ${exp.bgColor} border ${exp.borderColor} flex items-center justify-center transition-transform group-hover:scale-110`}
                  >
                    <span className={`text-sm font-bold ${exp.textColor}`}>
                      {exp.logo}
                    </span>
                  </div>
                  <div className={index % 2 === 0 ? "md:text-right" : ""}>
                    <h3 className="text-xl font-bold text-white">
                      {exp.company}
                    </h3>
                    <p className="text-gray-300 font-medium">{exp.role}</p>
                    {exp.team && (
                      <p className="text-sm text-gray-500">{exp.team}</p>
                    )}
                  </div>
                </div>

                {/* Meta */}
                <div
                  className={`flex flex-wrap gap-4 text-sm text-gray-500 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                >
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>

                {/* Highlights */}
                <ul
                  className={`space-y-2 mb-4 ${index % 2 === 0 ? "md:text-left" : ""
                    }`}
                >
                  {exp.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                      animate={
                        activeId === exp.id
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0.8, x: 0 }
                      }
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-2 text-gray-400 text-sm"
                    >
                      <ChevronRight
                        size={16}
                        className="text-cyan-400 mt-0.5 flex-shrink-0"
                      />
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Technologies */}
                <div
                  className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                >
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-400 border border-white/10 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="/SEResume.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-gray-300 border border-gray-700 hover:border-cyan-500/50 hover:text-cyan-400 transition-all group"
          >
            View Full Resume
            <ExternalLink
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
