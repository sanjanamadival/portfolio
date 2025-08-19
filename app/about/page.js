"use client";

import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-8"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg text-gray-300 max-w-3xl space-y-6"
        >
          <p>
            Hi 👋 I’m <span className="font-semibold">Sanjana</span>, a 
            <span className="text-white font-semibold"> Full Stack Developer </span> 
             passionate about building modern, fast, and user-friendly applications.
          </p>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-white">💻 Tech Stack</h3>
            <ul className="list-disc list-inside text-left mx-auto max-w-md">
              <li>Frontend: React.js, Next.js, TailwindCSS</li>
              <li>Backend: Node.js, Express.js</li>
              <li>Other: Python, Machine Learning, Flutter (mobile apps)</li>
              <li>Tools: GitHub, VS Code, Postman</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-white">🚀 Projects</h3>
            <ul className="list-disc list-inside text-left mx-auto max-w-md">
              <li>Healthcare Recommendation System (SVC)</li>
              <li>Tesla Stock Prediction (ARIMA & LSTM)</li>
              <li>Currency Converter App (Flutter)</li>
            </ul>
          </div>

          <p>
            👉 Explore my <a href="/projects" className="underline">Projects</a> or 
            <a href="/contact" className="underline"> Contact Me</a>.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
