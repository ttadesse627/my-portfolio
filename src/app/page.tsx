import Link from "next/link";
import Navbar from "./components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tesfaye - Portfolio</title>
        <meta name="description" content="A modern developer portfolio." />
      </Head>
      <div className="min-h-screen bg-gray-500 my-10">
        <Navbar />
        {/* Hero Section */}
        <section className="py-20 text-center bg-blue-600 text-white">
          <h1 className="text-5xl font-bold mb-4">Hi, I&apos;m Tesfaye Tadesse</h1>
          <p className="text-xl mb-6">A passionate Software Developer</p>
          <p className="text-lg">I specialize in full-stack web development, building modern web applications using the latest technologies.</p>
          <Link
            href="#projects" 
            className="mt-8 inline-block bg-yellow-500 text-black py-2 px-6 rounded-lg hover:bg-yellow-600 transition">
            View My Work
          </Link>
        </section>
        
        {/* About Section */}
        <section className="py-20 text-center bg-gray-200" id="about">
          <h2 className="text-3xl font-semibold text-black mb-6">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I am a software developer with a passion for creating interactive web applications. With expertise in both front-end and back-end technologies, I thrive in developing solutions that deliver a seamless user experience. I enjoy learning new technologies and improving my skills.
          </p>
        </section>
        
        {/* Skills Section */}
        <section className="py-20 text-center bg-white" id="skills">
          <h2 className="text-3xl font-semibold text-black mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="skill-item">
              <h3 className="font-semibold text-xl text-gray-700">React</h3>
            </div>
            <div className="skill-item">
              <h3 className="font-semibold text-xl text-gray-700">Node.js</h3>
            </div>
            <div className="skill-item">
              <h3 className="font-semibold text-xl text-gray-700">MongoDB</h3>
            </div>
            <div className="skill-item">
              <h3 className="font-semibold text-xl text-gray-700">Express.js</h3>
            </div>
          </div>
        </section>

        {/* Featured Project */}
        <section className="py-20 text-center bg-gray-200" id="projects">
          <h2 className="text-3xl font-semibold text-black mb-6">Featured Project</h2>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Project Name</h3>
            <p className="text-lg text-gray-600 mb-6">
              This project is a web application I built using React and Node.js. It is designed to [brief description of the project]. 
            </p>
            <Link 
              href="https://github.com/your-username/project-link" 
              className="text-blue-500 hover:underline">View Project on GitHub</Link>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 text-center bg-blue-600 text-white" id="contact">
          <h2 className="text-3xl font-semibold mb-6">Let&apos;s Connect</h2>
          <p className="text-lg mb-6">Feel free to reach out to me if you want to work together or just have a chat!</p>
          <Link 
            href="/contact" 
            className="inline-block bg-yellow-500 text-black py-2 px-6 rounded-lg hover:bg-yellow-600 transition">
            Contact Me
          </Link>
        </section>
      </div>
    </>
  );
}
