export default function ProjectPage(){
  const projects = [
    { id: 1, title: "Project 1", description: "A cool project" },
    { id: 2, title: "Project 2", description: "Another cool project" },
  ];
  return(
    <div>
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">My Work</h2>
      <div className="block px-10">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-6 rounded-lg shadow-lg text-black mb-8">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}