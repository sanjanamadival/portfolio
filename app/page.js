"use client";

import { motion } from "framer-motion";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <Navbar />

      <div className="flex flex-col items-center justify-center h-screen">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold"
        >
          Hi, I’m Sanjana 👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-lg text-gray-300"
        >
          A passionate Web Developer building modern web experiences 🚀
        </motion.p>
      </div>
    </main>
  );
}
