import { useEffect } from "react";
import { useState } from "react";
import { Sun, Moon, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { Card, CardContent } from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode === "dark") {
      setDarkMode(true);
    }
  }, []);
  useEffect(() => {
    document.title = "Bhartkumar Boricha | Portfolio";
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const socialLinks = [
    { icon: Github, url: "https://github.com/borichab" },
    { icon: Linkedin, url: "https://linkedin.com/in/bhartkumar-boricha" },
    { icon: Mail, url: "mailto:bhartpboricha@gmail.com" },
    { icon: ExternalLink, url: "https://www.xing.com/profile/Bhartkumar_Boricha/web_profiles" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white dark:from-zinc-900 dark:to-black text-gray-900 dark:text-white px-4 md:px-16 pt-10">
      {/* Hero Section */}
      <div className="flex justify-end mb-4">
        <button
          className="text-sm p-2 border rounded hover:bg-gray-200 dark:hover:bg-zinc-700"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle Theme"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
      <motion.div
        className="text-center space-y-4 mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Bhartkumar Boricha</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Full Stack Developer | Java · Spring Boot · React · PHP
        </p>
        <p className="italic mt-2 text-gray-500 dark:text-gray-400">
          “आपत्ति ही आविष्कार का रास्ता है” — Adversity is the path to invention.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
              <social.icon className="w-6 h-6 hover:text-primary transition" />
            </a>
          ))}
        </div>
      </motion.div>

      {/* About Section */}
      <motion.section
        className="max-w-3xl mx-auto mb-20 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <AboutMe />
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Projects/>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        className="mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Experience card={Card} cardContent={CardContent}/>
      </motion.section>

      {/* Education Section */}
      <motion.section
        className="mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Education/>
      </motion.section>

      {/* Resume + Contact Section */}
      <motion.section
        className="text-center mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Resume</h2>
            <a
              href="https://github.com/borichab/borichab/raw/main/BhartkumarBoricha_EN.pdf"
              target="_blank"
              className="px-4 py-2 border rounded hover:bg-gray-200 dark:hover:bg-zinc-700 transition inline-block"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p>Let's connect and build something awesome.</p>
            <p className="text-primary mt-2"><a target="_blank" href="mailto:bhartpboricha@gmail.com">bhartpboricha@gmail.com</a></p>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="text-center mt-20 text-sm text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Footer/>
      </motion.footer>
    </div>
  );
}
