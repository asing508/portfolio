"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, GraduationCap, Award, Calendar } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: "GPA", value: "3.99", suffix: "/4.00" },
    { label: "Dean's List", value: "7", suffix: " semesters" },
    { label: "Internships", value: "3", suffix: " completed" },
    { label: "Projects", value: "10+", suffix: " built" },
  ];

  return (
    <section id="about" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-cyan-400 text-sm font-mono mb-4 block">
            01. About Me
          </span>
          <h2 className="section-title text-white mb-4">
            Building the{" "}
            <span className="gradient-text">future</span>, one line at a time.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-lg text-gray-400 leading-relaxed">
              I&apos;m a passionate software engineer with a strong foundation in
              full-stack development and a keen interest in artificial
              intelligence. Currently pursuing my B.S. in Computer Science at{" "}
              <span className="text-amber-400 font-medium">
                Arizona State University
              </span>
              , where I&apos;ve maintained a near-perfect GPA while gaining
              hands-on experience through multiple internships.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              My journey in tech started with Java back in high school, and
              since then, I&apos;ve expanded my toolkit to include modern frameworks
              like <span className="text-cyan-400">React</span>,{" "}
              <span className="text-blue-400">TypeScript</span>, and{" "}
              <span className="text-green-400">Node.js</span>. I&apos;m particularly
              fascinated by the intersection of software engineering and AI,
              having worked on projects involving{" "}
              <span className="text-purple-400">OCR</span>,{" "}
              <span className="text-pink-400">Generative AI</span>, and{" "}
              <span className="text-orange-400">data pipelines</span>.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies,
              contributing to open-source projects, or working on personal
              projects that solve real-world problems.
            </p>

            {/* Quick Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              <div className="glass-card p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center">
                  <GraduationCap className="text-amber-400" size={24} />
                </div>
                <div>
                  <p className="text-white font-medium">Arizona State University</p>
                  <p className="text-sm text-gray-500">B.S. Computer Science</p>
                </div>
              </div>

              <div className="glass-card p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                  <Calendar className="text-cyan-400" size={24} />
                </div>
                <div>
                  <p className="text-white font-medium">Expected May 2026</p>
                  <p className="text-sm text-gray-500">Graduating Soon</p>
                </div>
              </div>

              <div className="glass-card p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                  <MapPin className="text-green-400" size={24} />
                </div>
                <div>
                  <p className="text-white font-medium">Tempe, Arizona</p>
                  <p className="text-sm text-gray-500">Based in</p>
                </div>
              </div>

              <div className="glass-card p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <Award className="text-purple-400" size={24} />
                </div>
                <div>
                  <p className="text-white font-medium">Dean&apos;s List</p>
                  <p className="text-sm text-gray-500">7 Consecutive Semesters</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="animated-border p-6 space-y-6">
              <h3 className="text-xl font-semibold text-white mb-6">
                Quick Stats
              </h3>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="relative"
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-gray-500 text-sm uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                  <div className="text-4xl font-bold text-white">
                    {stat.value}
                    <span className="text-lg text-gray-500 font-normal">
                      {stat.suffix}
                    </span>
                  </div>
                  {index < stats.length - 1 && (
                    <div className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Relevant Coursework */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-6 glass-card p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                Key Coursework
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Data Structures",
                  "Algorithms",
                  "Database Management",
                  "AI/ML",
                  "Software Engineering",
                  "Operating Systems",
                ].map((course) => (
                  <span key={course} className="tag-pill">
                    {course}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
