import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // 👈 this import is REQUIRED
import { motion } from "framer-motion";
import {
  FaNodeJs,
  FaReact,
  FaPhp,
  FaLaravel,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";

const skills = [
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
  { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
  { name: "Database", icon: <FaDatabase className="text-yellow-400" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-300" /> },
];

const projects = [
  {
    name: "Nutricon Accounting System",
    desc: "Built with Laravel — comprehensive accounting management system.",
    link: "https://mawbynutricon.com/login",
  },
  {
    name: "SabBachao",
    desc: "Worked on backend using PHP CodeIgniter for admin panel.",
    link: "https://admin.sabbachao.com/",
  },
  {
    name: "Algo Medical App",
    desc: "Backend built with Node.js for medical delivery services.",
    link: "https://algodelivery.com/algothirdpartyapp",
  },
];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
function App() {
  return (
    
    <div className="min-h-screen bg-[#0a0a0a] text-white font-poppins flex flex-col items-center justify-center px-6 py-12 space-y-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-3">
          Hi, I’m <span className="text-teal-400">Muhammad Asad Azam</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Full Stack Developer — <span className="text-white">specialized in Backend Development</span>
        </p>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-3xl text-center"
      >
        <h2 className="text-2xl font-semibold mb-6 text-teal-400">Skills</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-6 justify-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center space-y-2"
            >
              <div className="text-4xl">{skill.icon}</div>
              <span className="text-sm text-gray-300">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="w-full max-w-4xl"
      >
        <h2 className="text-2xl font-semibold mb-6 text-teal-400 text-center">
          Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="p-5 bg-gray-900 rounded-2xl shadow-md hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{project.name}</h3>
              <p className="text-gray-400 text-sm">{project.desc}</p>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <div className="bg-teal-600 text-white p-10 text-3xl font-bold">
  Tailwind Test
</div>

      <footer className="text-gray-500 text-sm mt-12">
        © {new Date().getFullYear()} Muhammad Asad Azam — All rights reserved.
      </footer>
    </div>
  );
}

export default App;
