"use client";

import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Experience() {
  const internshipImages = Array.from(
    { length: 19 },
    (_, i) => `/internship/internship-${i + 1}.png`
  );

  const experiences = [
    {
      role: "Software Development Intern",
      company: "Ganglia Technologies Pvt Ltd",
      duration: "Jan 2025 – Jun 2025",
      details: [
        "Built a full-stack medical logbook platform using MERN Stack and Redux.",
        "Developed RESTful APIs to securely fetch/store patient log entries.",
        "Improved UI/UX with React.js and Material UI for dashboards and forms.",
        "Implemented role-based authentication for students, mentors, and admins.",
        "Collaborated using Git, GitHub, and Agile practices for sprint planning.",
      ],
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "Material UI"],
      github: "https://github.com/sanjanamadival/medical-logbook/tree/main",
      certificate: "/images/internship.jpg",
      images: internshipImages,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % experiences[0].images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [experiences]);

  const getVisibleImages = () => {
    const prev = (currentIndex - 1 + experiences[0].images.length) % experiences[0].images.length;
    const next = (currentIndex + 1) % experiences[0].images.length;
    return [prev, currentIndex, next];
  };

  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-16 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-10"
        >
          Experience
        </motion.h2>

        <div className="max-w-4xl w-full space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">{exp.role}</h3>
                  <p className="text-gray-400">
                    {exp.company} | {exp.duration}
                  </p>
                </div>

                <div className="flex space-x-4 mt-4 md:mt-0">
                  {exp.github && (
                    <a
                      href={exp.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white text-lg flex items-center gap-2"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {exp.certificate && (
                    <a
                      href={exp.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white text-lg flex items-center gap-2"
                    >
                      <FaExternalLinkAlt /> Certificate
                    </a>
                  )}
                </div>
              </div>

              <ul className="mt-6 space-y-3 list-disc list-inside text-gray-300">
                {exp.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="mt-6 flex flex-wrap gap-3">
                {exp.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-sm px-3 py-1 rounded-full text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Carousel with 3 images */}
              {exp.images && (
                <div className="mt-6 relative flex justify-center items-center gap-4 h-64">
                  {getVisibleImages().map((idx, i) => {
                    const isCenter = i === 1;
                    return (
                      <motion.img
                        key={idx}
                        src={exp.images[idx]}
                        alt={`Project Screenshot ${idx + 1}`}
                        className={`rounded-lg shadow-md border border-gray-700 object-cover transition-all duration-500
                          ${isCenter ? "w-80 h-64 z-10 scale-105" : "w-56 h-40 opacity-60 scale-90"}
                        `}
                        initial={{ opacity: 0, x: isCenter ? 0 : i === 0 ? -100 : 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                      />
                    );
                  })}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
