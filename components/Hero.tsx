"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import AnimatedName from "./AnimatedName";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };


  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto text-center"
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm text-gray-300">
              Open to opportunities • Class of 2026
            </span>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          className="mb-10 flex justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative group"
          >
            {/* Subtle gradient border */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-pink-500/50 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

            {/* Profile image container */}
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900 to-black">
              <img
                src="/portfolio-image-AS.jpeg"
                alt="Aditya Singh"
                className="w-full h-full object-cover transition-transform duration-500 scale-100 object-[center_10%]"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Main Title - Custom CSS Letters */}
        <motion.div
          variants={itemVariants}
          className="mb-6"
        >
          <AnimatedName />
        </motion.div>

        {/* Subtitle */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 font-light">
            <span className="text-white font-medium">Software Engineer</span>
            <span className="mx-3 text-gray-600">•</span>
            <span>Full Stack Developer</span>
            <span className="mx-3 text-gray-600">•</span>
            <span>AI Enthusiast</span>
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-lg text-gray-500 mb-12 leading-relaxed"
        >
          Computer Science student at{" "}
          <span className="text-amber-400">Arizona State University</span> with
          a{" "}
          <span className="text-white font-medium">3.99 GPA</span>. Building
          scalable applications with React, TypeScript, and AI technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-6 py-3 rounded-full font-medium text-white overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2 text-sm">
              <Sparkles size={16} />
              View My Work
            </span>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 rounded-full text-sm font-medium text-gray-400 border border-gray-800 hover:border-gray-600 hover:text-white transition-colors"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Tech Stack Preview */}
        <motion.div variants={itemVariants} className="mt-12">
          <p className="text-xs text-gray-600 mb-3 uppercase tracking-wider">
            Tech Stack
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "React",
              "TypeScript",
              "Node.js",
              "Python",
              "PostgreSQL",
              "Go",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.08 }}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1.5 rounded-full text-xs font-medium text-gray-300 bg-white/5 border border-white/10 hover:border-white/20 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>


      </motion.div>
    </section>
  );
}
