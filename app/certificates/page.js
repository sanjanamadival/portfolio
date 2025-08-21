"use client";

import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function Certificates() {
  const certificates = [
    {
      title: "Internship",
      issuer: "Ganglia Technologies",
      date: "June 2025",
      image: "/images/internship.jpg",
    },
    {
      title: "Research paper",
      issuer: "IEEE",
      date: "February 2024",
      image: "/images/paper.jpg",
    },
    {
      title: "Flutter Workshop",
      issuer: "Department of MCA",
      date: "July 2024",
      image: "/images/flutter.jpg",
    },
    {
      title: "OOPs in Java",
      issuer: "Great Learning",
      date: "June 2024",
      image: "/images/java.jpg",
    },
    {
      title: "Data Science and AI",
      issuer: "Excelr",
      date: "January 2024",
      image: "/images/data.jpg",
    },
    {
      title: "Python Fundamentals",
      issuer: "Great Learning",
      date: "June 2024",
      image: "/images/python.jpg",
    },
    {
      title: "Workshop on GenAI",
      issuer: "NMAMIT",
      date: "December 2023",
      image: "/images/genai.jpg",
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
          Certificates
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl justify-items-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {certificates.map((cert, index) => (
            <motion.div
  key={index}
  className="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 w-80 h-72 flex flex-col"
  whileHover={{ scale: 1.05 }}
  variants={{
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }}
>
  <div className="flex-1 flex items-center justify-center bg-gray-900">
    <img
      src={cert.image}
      alt={cert.title}
      className="max-h-40 object-contain"
    />
  </div>
  <div className="p-4 text-center">
    <h2 className="text-lg font-semibold">{cert.title}</h2>
    <p className="text-gray-400">{cert.issuer}</p>
    <p className="text-gray-500 text-sm">{cert.date}</p>
  </div>
</motion.div>

          ))}
        </motion.div>
      </div>
    </main>
  );
}
