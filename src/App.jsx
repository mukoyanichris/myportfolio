import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

export default function Portfolio() {
  const [projects] = useState([
    {
      title: "Movie Recommender System",
      description: "A Django + React app integrating content-based and collaborative filtering with GPT API.",
      link: "#",
    },
    {
      title: "Networking ",
      description: "Assisted in extending network in Johanniter ie sdding new accesspoints and routers..",
      link:"#",
    },
    {
      title: "Hospital Appointment Booking",
      description: "Django-based system for patients to book doctor appointments, with admin dashboard.",
      link: "#",
    },
  ]);

  const [skills] = useState([
    "Python",
    "Django",
    "Laravel",
    "Java",
    "Networking and Cctv installation",
    "IT Support",
    "Cyber Security (aspiring)"
  ]);

  const [navOpen, setNavOpen] = useState(false);

  const NavLinks = ({ onClick }) => (
    <>
      <a href="#about" className="hover:text-indigo-600" onClick={onClick}>About</a>
      <a href="#skills" className="hover:text-indigo-600" onClick={onClick}>Skills</a>
      <a href="#education" className="hover:text-indigo-600" onClick={onClick}>Education</a>
      <a href="#projects" className="hover:text-indigo-600" onClick={onClick}>Projects</a>
      <a href="#contact" className="hover:text-indigo-600" onClick={onClick}>Contact</a>
    </>
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-xl font-bold text-indigo-600">Chrispus</h1>

          {/* Desktop links */}
          <div className="hidden md:flex gap-6">
            <NavLinks />
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg border border-gray-200"
            aria-label="Toggle menu"
            aria-expanded={navOpen}
            onClick={() => setNavOpen((v) => !v)}
          >
            {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {navOpen && (
          <div className="md:hidden px-6 pb-4">
            <div className="flex flex-col gap-3 text-base">
              <NavLinks onClick={() => setNavOpen(false)} />
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-4 sm:px-6 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900">

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
        >
          Hi, I’m Chrispus Mukoyani👋
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-2xl text-base sm:text-lg md:text-xl mb-2"
        >
          A Developer passionate about Python,php, Machine Learning, and React apps.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="max-w-2xl text-base sm:text-lg md:text-xl"
        >
          I also do Networking and IT Support ⚡ (and one day aim to be a Cyber Security Expert)
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a href="#projects" className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl shadow hover:bg-gray-100">
            View Projects
          </a>
          <a href="/cv.pdf" download className="px-6 py-3 bg-yellow-400 text-gray-800 font-semibold rounded-xl shadow hover:bg-yellow-500">
            Download CV
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto py-16 sm:py-20 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">About Me</h2>
        <p className="leading-relaxed text-base sm:text-lg">
        I’m a Computer Science graduate with hands-on experience in software development, networking, CCTV installation, IT support, and data science. I’m passionate about creating real-world solutions — from network setups and CCTV systems to recommender engines and web applications. Currently deepening my skills in cybersecurity, and always open to collaborating on projects that drive meaningful impact.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-white py-16 sm:py-20 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-indigo-100 text-indigo-700 text-sm sm:text-base font-medium rounded-full shadow hover:shadow-lg"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Education Section with Timeline */}
      <section id="education" className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">Education & Work</h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="border-l-4 border-indigo-500 absolute h-full left-4 top-0"></div>
          <div className="ml-8 sm:ml-10 space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-4 sm:p-6 rounded-xl shadow"
            >
              <h3 className="text-lg sm:text-xl font-semibold">Technical University of Mombasa</h3>
              <p className="text-gray-600 text-sm sm:text-base">Bachelor’s Degree in Computer Science</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-4 sm:p-6 rounded-xl shadow"
            >
              <h3 className="text-lg sm:text-xl font-semibold">Freelance Work</h3>
              <p className="text-gray-600 text-sm sm:text-base">Worked on projects including IT support, networking, and web development.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white p-4 sm:p-6 rounded-xl shadow"
            >
              <h3 className="text-lg sm:text-xl font-semibold">Johanniter</h3>
              <p className="text-gray-600 text-sm sm:text-base">Hands-on experience in IT support, server management, and networking.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-100 py-16 sm:py-20 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-4 sm:p-6 bg-white rounded-2xl shadow hover:shadow-lg"
            >
              <h3 className="text-base sm:text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-600 hover:underline text-sm sm:text-base">
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Contact</h2>
        <p className="text-base sm:text-lg">Let’s connect! Reach out to me via:</p>
        <div className="flex justify-center gap-4 sm:gap-6 mt-6 flex-wrap">
          <a href="https://github.com/mukoyanichris" target="_blank" rel="noopener noreferrer"><Github className="w-6 h-6 sm:w-7 sm:h-7" /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><Linkedin className="w-6 h-6 sm:w-7 sm:h-7" /></a>
          <a href="mukoyanichris@gmail.com"><Mail className="w-6 h-6 sm:w-7 sm:h-7" /></a>
          <a href="tel:" className="text-gray-700 font-medium hover:text-indigo-600">
          +254758298283</a>
        </div>
        <div className="mt-6">
          <a href="/cv.pdf" download className="px-6 py-3 bg-yellow-400 text-gray-800 font-semibold rounded-xl shadow hover:bg-yellow-500 text-sm sm:text-base">
            Download CV
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-200 text-sm sm:text-base text-gray-600">
        © {new Date().getFullYear()} Chrispus. All rights reserved.
      </footer>
    </div>
  );
}
