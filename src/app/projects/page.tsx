import Link from 'next/link';

export default function ProjectPage(){

  const projects = [
    {
      title: "Employment Agency System",
      image: "/profile.jpg",
      description: "An API that is built using Asp.Net Core and MySQL database using EF Core.",
      technologies: ['ASP.NET Core', 'EF Core', 'SignalR', 'MySQL'],
      features: [
        "User authentication and permission-based authorization",
        "Real-time search",
        "Flexible Reports Generation",
      ],
      liveDemo: "",
      github: "https://github.com/ttadesse627/smartagency",
    },
    {
      title: "Task Management App",
      image: "/profile.jpg",
      description: "A task management app built with React Native and Firebase.",
      technologies: ['ASP.NET Core', 'EF Core', 'SignalR', 'MySQL'],
      features: [
        "Real-time task updates",
        "Offline support",
        "Push notifications",
      ],
      liveDemo: "https://example.com",
      github: "https://github.com/your-username/your-repo",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 text-gray-900">
      <div className="max-w-5xl mx-auto my-16">
        <h1 className="text-4xl font-bold text-center mb-8 ">My Projects</h1>
        <p className="text-lg text-gray-600 text-left mb-12">
          Here are some of the projects I&apos;ve worked on. Each one represents a unique challenge and an opportunity to learn and grow as a developer.
        </p>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                width={50}
                height={50}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-bold mt-4">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <div className="mt-4">
                <h4 className="font-semibold">Technologies:</h4>
                <ul className="list-disc list-inside grid grid-cols-2 text-gray-600">
                  {project.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 flex space-x-4">
                <Link
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {project.liveDemo && "Live Demo"}
                </Link>
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  GitHub
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-4">
            Interested in working together? Let&apos;s build something amazing!
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}