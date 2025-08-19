"use client";

import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vpnfov6",   
        "template_77frtrg",  
        form.current,
        "xI9bDderNTNaU5ILp"  
      )
      .then(
        (result) => {
          alert("Message sent successfully ✅");
        },
   (error) => {
  console.log("FAILED...", error);
  alert("Failed to send ❌. Check console for details.");
}

      );
  };

  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-4"
        >
          Contact Me
        </motion.h2>
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col gap-4 w-full max-w-md"
        >
          <input type="text" name="user_name" placeholder="Your Name" className="p-3 rounded bg-gray-800 text-white" />
          <input type="email" name="user_email" placeholder="Your Email" className="p-3 rounded bg-gray-800 text-white" />
          <textarea name="message" placeholder="Your Message" className="p-3 rounded bg-gray-800 text-white" rows="4"></textarea>
          <button type="submit" className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">
            Send
          </button>
        </motion.form>
      </div>
    </main>
  );
}
