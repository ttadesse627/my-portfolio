export default function AboutPage() {
    return (
      <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="w-full py-8">
            <div className="flex flex-col items-center text-center text-blue-950">
                <h1 className="text-4xl font-bold mb-4">
                🚀 Tesfaye Tadesse
                </h1>
                <h4 className="text-2xl font-bold">
                Software Developer
                </h4>
            </div>
            </div>
  
          {/* About Me Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">👋 About Me</h2>
            <p className="text-gray-700 leading-relaxed">
              I’m <strong>Tesfaye Tadesse</strong>, a passionate and detail-oriented{" "}
              <strong>Junior Software Developer</strong> with over{" "}
              <strong><i className="text-zinc-950">2</i> years of experience</strong> in building and testing scalable
              applications. I thrive in collaborative environments that embrace{" "}
              <strong>Agile methodologies</strong> and have a strong drive for continuous
              learning and problem-solving.
            </p>
          </section>
  
          {/* Skills & Technologies Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🔧 Skills & Technologies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-medium text-gray-700 mb-2">Backend Development</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li><strong>Languages:</strong> C#, Java</li>
                  <li><strong>Frameworks:</strong> ASP.NET Core</li>
                  <li><strong>API Development:</strong> RESTful APIs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-700 mb-2">Frontend Development</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li><strong>Frameworks:</strong> React, Angular</li>
                  <li><strong>Styling:</strong> CSS, Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-700 mb-2">Databases</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li><strong>Relational Databases:</strong> MySQL, SQL Server</li>
                  <li><strong>Database Design:</strong> Schema design, optimization</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-700 mb-2">Tools & Practices</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li><strong>Version Control:</strong> Git, GitHub, Azure DevOps</li>
                  <li><strong>Agile Methodologies:</strong> Scrum, Sprint Planning, Daily Standups</li>
                  <li><strong>Testing Tools:</strong> JMeter, Postman</li>
                </ul>
              </div>
            </div>
          </section>
  
          {/* Experience Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">💼 Experience</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-gray-700 mb-2">
                  Junior Software Developer
                </h3>
                <p className="text-gray-600 font-semibold">
                  Appdiv Systems | <span className="font-normal">03/2023 – Present</span>
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>
                    Designed and implemented <strong>database schemas and APIs</strong> using{" "}
                    <strong>ASP.NET Core</strong>, ensuring scalability and performance.
                  </li>
                  <li>
                    Developed and tested <strong>multiple projects</strong>, delivering
                    high-quality solutions that met client requirements.
                  </li>
                  <li>
                    Identified and reported bugs, contributing to improved system reliability
                    and user experience.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-700 mb-2">IT Intern</h3>
                <p className="text-gray-600 font-semibold">
                  Addis Ababa Science & Technology University |{" "}
                  <span className="font-normal">08/2022 – 10/2022</span>
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>
                    Developed a <strong>Class Scheduler System</strong> using{" "}
                    <strong>Java, JSP, and MySQL</strong>, streamlining academic scheduling
                    for the university.
                  </li>
                  <li>
                    Gained hands-on experience in <strong>software development lifecycle</strong>{" "}
                    and <strong>team collaboration</strong>.
                  </li>
                </ul>
              </div>
            </div>
          </section>
  
          {/* Certifications Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🏆 Certifications</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                <a
                  href="https://www.scrumstudy.com/certification/verify?type=SFC&number=965929"
                  className="text-blue-600 hover:underline"
                >
                  <strong>Scrum Fundamental Certified (SFC)</strong> – Agile Development Methodology (SCRUMstudy)
                </a>
              </li>
              <li>
                <a
                  href="https://www.udacity.com/certificate/e/49a2aa7a-4bf8-11ef-9ee7-af594eae9c42"
                  className="text-blue-600 hover:underline"
                >
                  <strong>Data Analysis Fundamentals</strong> – Udacity Nanodegree
                </a>
              </li>
            </ul>
          </section>
  
          {/* Call-to-Action Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎯 What Drives Me</h2>
            <p className="text-gray-700 leading-relaxed">
              I’m passionate about building <strong>scalable, user-friendly applications</strong>{" "}
              that solve real-world problems. I believe in the power of collaboration and
              continuous learning to deliver impactful solutions.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Let’s connect and build something amazing together! 🚀
            </p>
          </section>
        </div>
      </div>
    );
  }