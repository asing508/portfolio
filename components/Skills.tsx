"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Code2,
  Database,
  Layout,
  Brain,
  Wrench,
  Layers,
} from "lucide-react";

const skillCategories = [
  {
    id: "languages",
    title: "Languages",
    icon: Code2,
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "Java", level: 95 },
      { name: "Python", level: 90 },
      { name: "JavaScript/TypeScript", level: 92 },
      { name: "SQL", level: 88 },
      { name: "C/C++", level: 75 },
      { name: "Go", level: 70 },
      { name: "Bash", level: 80 },
    ],
  },
  {
    id: "backend",
    title: "Backend & Databases",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "FastAPI", level: 85 },
      { name: "PostgreSQL", level: 88 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Supabase", level: 85 },
      { name: "RESTful APIs", level: 92 },
    ],
  },
  {
    id: "frontend",
    title: "Frontend & UI",
    icon: Layout,
    color: "from-orange-500 to-amber-500",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "HTML/CSS", level: 95 },
      { name: "JavaFX", level: 80 },
      { name: "Streamlit", level: 82 },
    ],
  },
  {
    id: "ai",
    title: "AI & Data",
    icon: Brain,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Generative AI/LLMs", level: 85 },
      { name: "LangGraph", level: 75 },
      { name: "OCR (Tesseract)", level: 82 },
      { name: "Pandas/NumPy", level: 85 },
      { name: "ETL Pipelines", level: 80 },
      { name: "Data Visualization", level: 82 },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Tools",
    icon: Wrench,
    color: "from-red-500 to-rose-500",
    skills: [
      { name: "Git", level: 92 },
      { name: "Docker", level: 85 },
      { name: "CI/CD", level: 80 },
      { name: "Linux/Unix", level: 85 },
      { name: "Postman", level: 88 },
      { name: "Vercel", level: 82 },
    ],
  },
  {
    id: "practices",
    title: "Methodologies",
    icon: Layers,
    color: "from-indigo-500 to-violet-500",
    skills: [
      { name: "Agile/Scrum", level: 88 },
      { name: "REST API Design", level: 90 },
      { name: "MVC Architecture", level: 85 },
      { name: "OOP Principles", level: 92 },
      { name: "RBAC/Security", level: 85 },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("languages");

  const activeSkills =
    skillCategories.find((c) => c.id === activeCategory)?.skills || [];

  return (
    <section id="skills" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-cyan-400 text-sm font-mono mb-4 block">
            04. Skills
          </span>
          <h2 className="section-title text-white mb-4">
            My <span className="gradient-text">toolkit</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Technologies and tools I use to bring ideas to life. Always learning
            and expanding my skill set.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;

              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left group ${
                    isActive
                      ? "bg-white/5 border border-white/10"
                      : "hover:bg-white/5"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? `bg-gradient-to-br ${category.color}`
                        : "bg-white/5 group-hover:bg-white/10"
                    }`}
                  >
                    <Icon
                      size={24}
                      className={isActive ? "text-white" : "text-gray-400"}
                    />
                  </div>
                  <div>
                    <h3
                      className={`font-semibold transition-colors ${
                        isActive ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {category.skills.length} skills
                    </p>
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="active-category"
                      className={`ml-auto w-1 h-8 rounded-full bg-gradient-to-b ${category.color}`}
                    />
                  )}
                </motion.button>
              );
            })}
          </motion.div>

          {/* Skills Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="glass-card p-8">
              <div className="grid gap-6">
                {activeSkills.map((skill, index) => {
                  const activeColor =
                    skillCategories.find((c) => c.id === activeCategory)
                      ?.color || "from-cyan-500 to-blue-500";

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1,
                            delay: index * 0.1,
                            ease: "easeOut",
                          }}
                          className={`h-full bg-gradient-to-r ${activeColor} rounded-full relative`}
                        >
                          <div className="absolute inset-0 bg-white/20 shimmer" />
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                { label: "Languages", value: "7+" },
                { label: "Frameworks", value: "10+" },
                { label: "Years Coding", value: "6+" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="glass-card p-4 text-center"
                >
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* All Skills Tags Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16"
        >
          <h3 className="text-lg font-semibold text-gray-400 mb-6 text-center">
            All Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skillCategories.flatMap((cat) =>
              cat.skills.map((skill) => (
                <motion.span
                  key={`${cat.id}-${skill.name}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium bg-white/5 text-gray-400 border border-white/10 hover:border-transparent hover:bg-gradient-to-r ${cat.color} hover:text-white transition-all cursor-default`}
                >
                  {skill.name}
                </motion.span>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
