"use client";

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { BsBrightnessHigh, BsMoon } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { SiDotnet, SiReact, SiAngular, SiMysql, SiGit } from "react-icons/si";
import { motion } from "framer-motion";
import { data } from "./data";
import {formatDate} from "./services";


const Home = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isBlack, setIsBlack] = useState(false);
  const [navLinkDisplay, setNavLinkDisplay] = useState("hidden");

  const skills = [
    { name: "ASP.NET Core", icon: <SiDotnet className="text-purple-600 text-4xl" /> },
    { name: "React", icon: <SiReact className="text-blue-500 text-4xl" /> },
    { name: "Angular", icon: <SiAngular className="text-red-600 text-4xl" /> },
    { name: "SQL/MySQL", icon: <SiMysql className="text-blue-400 text-4xl" /> },
    { name: "Git", icon: <SiGit className="text-orange-600 text-4xl" /> },
  ];

  const projects = data;
  const lightTheme = "bg-white/90 text-black shadow-md";
  const darkTheme = "bg-stone-800 text-white shadow-md";

  const [theme, setTheme] = useState(lightTheme);
  const inputStyle = theme==darkTheme?"bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-white/70": 
                  "bg-gray-50 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-gray-400";
  const mobileViewClass = "flex flex-col justify-between items-center";
  const mobileHideClass = "hidden";


  const changeTheme = () =>{

    if (!isBlack) {
      setTheme(darkTheme);
      setIsBlack(!isBlack);
      console.log("theme: "+theme);
    }
    else 
    {
      setTheme(lightTheme);
      setIsBlack(!isBlack);
    }
  };

  const displayMobileNav = () =>{
    if (navLinkDisplay === mobileHideClass) {
      setNavLinkDisplay(mobileViewClass);
    }
    else setNavLinkDisplay(mobileHideClass);
  };

  return (
    <>
      <Head>
        <title>Tesfaye Tadesse | Full-Stack Developer</title>
        <meta name="description" content="Professional portfolio of Tesfaye Tadesse, Full-Stack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className={`fixed w-full backdrop-blur-sm z-50 ${theme}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <Link href="#home" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
              <Image
                src="/profile.jpg"
                alt="Tesfaye"
                width={50}
                height={50}
                className="rounded-full border-2 border-yellow-400"
              />
            </div>
            <span className="text-lg sm:text-xl font-semibold">Tesfaye Tadesse</span>
          </Link>
          {/* Desktop Nav */}
          <div className={`hidden md:flex space-x-6 lg:space-x-8`}>
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className={`capitalize transition-colors ${activeSection === item ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-500'}`}
                onClick={() => setActiveSection(item)}
              >
                {item}
              </Link>
            ))}
          </div>
          {/* Theme Button */}
          <button onClick={changeTheme} className="ml-2">
            <span>
              {isBlack ? (<BsBrightnessHigh />) : (<BsMoon />)}
            </span>
          </button>
          {/* Hamburger */}
          <button className="md:hidden ml-2 text-gray-700" onClick={displayMobileNav}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile Nav Overlay */}
        <div className={`${navLinkDisplay} md:hidden absolute top-0 left-0 w-full h-screen bg-black/70 flex-col items-center justify-center z-40 transition-all`}>
          <div className="flex flex-col space-y-8 bg-white dark:bg-stone-800 w-4/5 mx-auto mt-24 p-8 rounded-xl shadow-lg">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className={`capitalize text-lg transition-colors ${activeSection === item ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-500'}`}
                onClick={() => {
                  setActiveSection(item);
                  setNavLinkDisplay(mobileHideClass);
                }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main className={`pt-20 ${theme}`}>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 shadow-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
              Hi, I&apos;m <span className="text-blue-600">Tesfaye Tadesse</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl mb-8">
              Software Developer
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              I build modern, scalable web applications with clean code and intuitive user experiences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="#projects"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg"
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className={`py-20 px-6 ${theme}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">
              About <span className="text-blue-600">Me</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden shadow-xl">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                    <Image
                      src="/profile.jpg"
                      alt="Tesfaye"
                      width={300}
                      height={300}
                      className="rounded-full border-2 border-yellow-400 bg-gray-900"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-gray-600 mb-6">
                  I&apos;m a dedicated Software Developer with expertise in designing, developing, and testing robust software solutions.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  My specialization lies in backend web development, API development & integration, and database design. I&apos;m passionate about implementing modern technologies to build efficient and scalable applications.
                </p>
                <p className="text-lg text-gray-600">
                  When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Experience Section */}
        <section id="experience" className={`py-20 bg-gray-50 px-6 ${theme}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
              Professional <span className="text-blue-600">Experience</span>
            </h2>
            
            <div className="space-y-12">
              {/* Current Job */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-xl shadow-md"
              >
                <div className="flex items-start">
                  <div className="mr-6">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 text-2xl font-bold">AD</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <h3 className="text-xl font-bold text-gray-800">Software Developer</h3>
                      <span className="text-blue-600 font-medium">{formatDate(2023,2)} – Present</span>
                    </div>
                    <p className="text-gray-600 font-medium mb-4">Appdiv Systems</p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Designed and implemented <strong className="text-gray-800">database schemas and APIs</strong> using <strong className="text-gray-800">ASP.NET Core</strong>, ensuring scalability and performance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Developed and tested <strong className="text-gray-800">multiple projects</strong>, delivering high-quality solutions that met client requirements</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Identified and reported bugs, contributing to improved system reliability and user experience</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className={`py-20 ${theme} px-6`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">
              Professional <span className="text-blue-600">Certifications</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Scrum Certification */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl border border-gray-400"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <span className="text-blue-600 text-xl">🏆</span>
                  </div>
                  <h3 className="text-lg font-bold">Scrum Fundamental Certified</h3>
                </div>
                <p className="text-gray-600 mb-4">Agile Development Methodology (SCRUMstudy)</p>
                <a
                  href="https://www.scrumstudy.com/certification/verify?type=SFC&number=965929"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  View Credential
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </motion.div>

              {/* Data Analysis Certification */}
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl border border-gray-400"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <span className="text-purple-600 text-xl">📊</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Data Analysis Fundamentals</h3>
                </div>
                <p className="text-gray-600 mb-4">Udacity Nanodegree Program</p>
                <a
                  href="https://www.udacity.com/certificate/e/49a2aa7a-4bf8-11ef-9ee7-af594eae9c42"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  View Credential
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={`py-20 px-6 ${theme}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
              My <span className="text-blue-600">Skills</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  // whileHover={{ y: -5 }}
                  className="p-6 rounded-xl shadow-md flex flex-col items-center text-center"
                >
                  {skill.icon}
                  <h3 className="mt-4 font-medium">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={`py-20 px-6 ${theme}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
              Featured <span className="text-blue-600">Projects</span>
            </h2>
            {projects.map((project) => (
              <div key={project.id} className="mb-16">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <div className="h-64 flex items-center justify-center">
                    <span>Project Preview</span>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="mb-6">{project.description}</p>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="text-blue-800 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link
                      href={project.githubUrl?? ""}
                      className="inline-flex items-center px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <FaGithub className="mr-2" />
                      View on GitHub
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`py-20 bg-gradient-to-br px-6 ${theme}`}>
          <div className={`max-w-4xl mx-auto text-center`}>
            <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? I&apos;d love to hear from you!
            </p>
            <div className="flex justify-center space-x-6 mb-12">
              <a
                href="https://t.me/ttadesse627"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FaTelegram className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/ttadesse627"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="mailto:ttadesse627@gmail.com"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FiMail className="text-xl" />
              </a>
            </div>
            <form className="max-w-md mx-auto">
              <div className="grid grid-cols-1 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`px-4 py-3 rounded-lg ${inputStyle} placeholder-foreground`}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className={`px-4 py-3 rounded-lg ${inputStyle}`}
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className={`px-4 py-3 rounded-lg ${inputStyle}`}
                ></textarea>
                <button
                  type="submit"
                  className="px-6 py-3 text-blue-600 rounded-lg font-medium hover:bg-blue-300 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p>© {new Date().getFullYear()} Tesfaye Tadesse. All rights reserved.</p>
          <p className="mt-2 text-gray-400 text-sm">
            Built with Next.js, Tailwind CSS, and ❤️
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;


