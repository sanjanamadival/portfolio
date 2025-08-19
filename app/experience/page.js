"use client";

import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      role: "Software Development Intern",
      company: "Ganglia Technologies Pvt Ltd",
      duration: "Jan 2025 – Present",
      details: [
        "Built a full-stack medical logbook platform using MERN Stack and Redux.",
        "Developed RESTful APIs to securely fetch/store patient log entries.",
        "Improved UI/UX with React.js and Material UI for dashboards and forms.",
        "Implemented role-based authentication for students, mentors, and admins.",
        "Collaborated using Git, GitHub, and Agile practices for sprint planning.",
      ],
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "Material UI"],
      github: "https://github.com/sanjanamadival/medical_reccomendation_system", // replace if different
      certificate: "https://link-to-your-certificate.com", // replace with actual certificate link
      images: [
        "/healthcare-dashboard.png", // place these in your public/ folder
        "/healthcare-form.png",
      ],
    },
  ];

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

              {/* Images */}
              {exp.images && (
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="Project Screenshot"
                      className="rounded-lg shadow-md border border-gray-700"
                    />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
