import React from "react";
import {
  SiLaravel,
  SiPhp,
  SiNodedotjs,
  SiMongodb,
  SiReact,
  SiMysql,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";
import "./App.css";
import { FaMicrosoft } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";

const skills = [
  { icon: <SiLaravel />, name: "Laravel" },
  { icon: <SiPhp />, name: "PHP" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiReact />, name: "React" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <FaMicrosoft />, name: "MS Office" }, 

];

const projects = [
  {
    title: "Nutricon Accounting System",
    desc: "A complete accounting system built with Laravel.",
    link: "https://mawbynutricon.com/login",
  },
  {
    title: "SabBachao",
    desc: "Worked on backend using PHP CodeIgniter.",
    link: "https://admin.sabbachao.com/",
  },
  {
    title: "Algo Medical App",
    desc: "Developed backend using Node.js for medical deliveries.",
    link: "https://algodelivery.com/algothirdpartyapp",
  },
];

function App() {
  return (
    <div className="App">
     <header className="hero">
  <img src="/asad.jpg" alt="Muhammad Asad Azam" className="profile-pic" />

  <h1 className="fade-in">
    Hi, I'm <span>Muhammad Asad Azam</span>
  </h1>
  <p className="fade-in-delay">
    Full Stack Developer <span>(Specialized in Backend)</span>
  </p>

  <p className="bio">
    With years of experience building web systems using Laravel, Node.js, and modern
    JavaScript frameworks, I focus on creating fast, scalable, and secure backend solutions.
  </p>
</header>


      <section className="about">
        <h2>About Me</h2>
        <p>
          I’m a passionate backend-focused full-stack developer with experience
          in Laravel, Node.js, and modern web technologies. I enjoy creating
          efficient systems that solve real-world problems.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div key={i} className="skill-card slide-up">
              {skill.icon}
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((p, i) => (
            <a key={i} href={p.link} target="_blank" rel="noreferrer" className="project-card fade-in">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </a>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Muhammad Asad Azam. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
