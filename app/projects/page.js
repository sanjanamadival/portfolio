"use client";

import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function Projects() {
  const projectList = [
    {
      title: "Healthcare Recommendation System",
      desc: "Built with SVC model + Flask backend for symptom-based predictions.",
      tech: ["Python", "Flask", "ML"],
      link: "https://github.com/sanjanamadival/medical_reccomendation_system",
      img: "/images/healthcare.png",
    },
    {
      title: "Tesla Stock Prediction",
      desc: "Time-series forecasting using ARIMA & LSTM with visualization.",
      tech: ["Python", "LSTM", "ARIMA"],
      link: "https://github.com/sanjanamadival/stock-market-prediction",
      img: "/images/tesla.png",
    },
    {
      title: "Currency Converter App",
      desc: "Flutter app for real-time currency conversion with APIs.",
      tech: ["Flutter", "Dart", "API"],
      link: "https://github.com/sanjanamadival/flutter-currency-converter-app",
      img: "/images/currency.jpg",
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
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              {/* Project Image */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-40 object-cover"
              />

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-gray-400">{project.desc}</p>

                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-gray-700 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition"
                >
                  View Project 🚀
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
