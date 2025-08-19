import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Sanjana | Portfolio",
  description: "My personal portfolio built with Next.js, Tailwind, and Framer Motion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-8 py-4 bg-gray-800 shadow-md">
          <h1 className="text-2xl font-bold">Sanjana</h1>
          <div className="flex gap-6">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>

        {/* Page Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
